import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

interface DepGraph {
    [file: string]: string[];
}

const graph: DepGraph = {};

function analyzeFile(filePath: string) {
    const sourceCode = fs.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(
        filePath,
        sourceCode,
        ts.ScriptTarget.ES2020,
        true
    );

    const imports: string[] = [];

    // Traverse AST
    function visit(node: ts.Node) {
        // Import declarations
        if (ts.isImportDeclaration(node)) {
            const importPath = (node.moduleSpecifier as ts.StringLiteral).text;

            // Normalize path for output
            imports.push(importPath);
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    // Save results
    const fileName = path.relative(process.cwd(), filePath);
    graph[fileName] = imports;
}

function analyzeDirectory(dir: string) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            analyzeDirectory(fullPath);
        } else if (file.endsWith(".ts")) {
            analyzeFile(fullPath);
        }
    }
}

// START HERE
analyzeDirectory("src");

// =====================
// PRINT RESULT
// =====================
console.log("\n DEPENDENCY GRAPH");
console.log("----------------------");

for (const file in graph) {
    console.log(`\n${file}`);

    // Safely access graph[file] using optional chaining
    if (graph[file]?.length === 0) {
        console.log("   → No dependencies");
    } else {
        graph[file]?.forEach((imp) => {
            console.log(`   → ${imp}`);
        });
    }
}

