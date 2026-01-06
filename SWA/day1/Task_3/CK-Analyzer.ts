    import { Project, SyntaxKind } from "ts-morph";
    import * as fs from "fs";
    import * as path from "path";

    // ROOT = one folder above Task_3
    const ROOT = path.join(__dirname, "..");

    // load project using your tsconfig.json
    const project = new Project({
        tsConfigFilePath: path.join(__dirname, "tsconfig.json"),
    });

    // --------------------------------------
    //  RECURSIVE FILE SCANNER (.ts only)
    // --------------------------------------
    function getAllTsFiles(dir: string, fileList: string[] = []) {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const full = path.join(dir, file);
            const stat = fs.statSync(full);

            if (stat.isDirectory()) {
                if (file === "node_modules" || file === "Task_3") continue;
                getAllTsFiles(full, fileList);
            } else if (file.endsWith(".ts")) {
                fileList.push(full);
            }
        }
        return fileList;
    }

    const allTsFiles = getAllTsFiles(ROOT);
    console.log(`FOUND ${allTsFiles.length} TS FILES\n`);

    allTsFiles.forEach(f => project.addSourceFileAtPath(f));

    // ------------------------------------------------
    // METRIC CALCULATOR
    // ------------------------------------------------
    project.getSourceFiles().forEach(source => {
        const filePath = source.getFilePath();

        console.log(`\nAnalyzing: ${filePath}`);

        source.getClasses().forEach(cls => {
            const name = cls.getName();
            console.log(`\nClass: ${name}`);

            // ----------------------- WMC -----------------------
            const methods = cls.getMethods();
            let wmc = 0;
            methods.forEach(m => {
                const complexity =
                    m.getDescendantsOfKind(SyntaxKind.IfStatement).length +
                    m.getDescendantsOfKind(SyntaxKind.ForStatement).length +
                    m.getDescendantsOfKind(SyntaxKind.WhileStatement).length +
                    1;
                wmc += complexity;
            });
            console.log(`WMC = ${wmc}`);

            // ----------------------- DIT -----------------------
            let dit = 0;
            let base = cls.getBaseClass();
            while (base) {
                dit++;
                base = base.getBaseClass();
            }
            console.log(`DIT = ${dit}`);

            // ----------------------- NOC -----------------------
            const noc = cls.getDerivedClasses().length;
            console.log(`NOC = ${noc}`);

            // ----------------------- CBO -----------------------
            let cbo = 0;
            cls.getProperties().forEach(p => {
                const type = p.getType().getText();
                if (!["string", "number", "boolean"].includes(type) && type !== name) {
                    cbo++;
                }
            });
            console.log(`CBO = ${cbo}`);

            // ----------------------- RFC -----------------------
            let rfc = methods.length;
            methods.forEach(m => {
                const calls = m.getDescendantsOfKind(SyntaxKind.CallExpression).length;
                rfc += calls;
            });
            console.log(`RFC = ${rfc}`);

            // ----------------------- LCOM -----------------------
            const fields = cls.getProperties().map(p => p.getName());
            const methodAccess: Record<string, string[]> = {};

            methods.forEach(m => {
                methodAccess[m.getName()] = fields.filter(f => m.getText().includes(f));
            });

            let unconnected = 0;
            let totalPairs = 0;

            const keys = Object.keys(methodAccess);

            for (let i = 0; i < keys.length; i++) {
                for (let j = i + 1; j < keys.length; j++) {
                    totalPairs++;
                    const shared = methodAccess[keys[i]].filter(a =>
                        methodAccess[keys[j]].includes(a)
                    );
                    if (shared.length === 0) unconnected++;
                }
            }

            const lcom = totalPairs === 0 ? 0 : unconnected / totalPairs;
            console.log(`LCOM = ${lcom.toFixed(2)}`);
        });
    });
