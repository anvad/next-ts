https://nextjs.org/learn/excel/typescript/setup

```powershell
mkdir next-ts
cd next-ts
npm init -y
npm install --save react react-dom next
mkdir pages

npm install --save-dev typescript @types/react @types/react-dom @types/node
```

replace `scripts` section in `package.json` with the following:
```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

Create index.tsx
```tsx
const Home = () => <h1>Hello world!</h1>;

export default Home;
```

Run the dev server
```powershell
npm run dev
```

push to github
- create a new github repo- `next-ts`
- add a nodejs `.gitignore` file
```powershell
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/anvad/next-ts.git
git push -u origin master
```