class SearchService {

  search(key: string): void;          // search by keyword
  search(id: number): void;           // search by id
  search(key: string, limit: number): void; // search with limit

  // Implementation
  search(param1: any, param2?: any): void {
    if (typeof param1 === "string" && param2 === undefined) {
      console.log(`Searching by keyword: ${param1}`);
    } 
    else if (typeof param1 === "number") {
      console.log(`Searching by ID: ${param1}`);
    } 
    else {
      console.log(`Searching keyword: ${param1} with limit: ${param2}`);
    }
  }
}

const s = new SearchService();
s.search("laptop");
s.search(101);
s.search("mobile", 5);
