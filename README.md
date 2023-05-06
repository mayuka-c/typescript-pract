# typesript-pract
typesript pratice repo

## Do basic configurations

### basic command
```bash
# Ensure main.ts is present in the cwd
tsc main.ts
tsc main.ts -w
```

### To initialize tsconfig.json
```bash
tsc --init
```

### To check for all ts files in src
Uncomment "rootDir": "./src"

### To output js files under build/js dir
Uncomment "outDir": "./build/js"

### To look for all the files in root dir
```bash
tsc -w
```

### To compile only tsc files under src dir
Add this line at the end of tsconfig.json file: "include": ["src"]

### To avoid compiling to js files if there are type errors in ts files
Uncomment "noEmitOnError": "true"