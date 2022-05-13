# Iron

## This is Citrus' internal frontend design system and style library

## Why "Iron"
The periodic table of elements symbol for iron is `Fe`, short for the Latin ferrum, literally translated as "holy metal" - we can get behind that. Not to mention, `FE` is typically used to shorten "frontend" in web development, and this library helps us build the frontend of Citrus - one of the pillars of Citrus is an exceptional end-to-end experience for our users. The visual and interactive consistency between disparate surface areas (tvOS, web...) of our company starts here and ends with the user's experience. Let's do this!

### We use
- Style Dictionary - https://github.com/amzn/style-dictionary
- Figma Tokens - https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens
- Our Figma Design System file - https://www.figma.com/file/fgODV4YBzhZc2ZxrFddbgY/Citrus-Design-System?node-id=47%3A155

### To get started
Make sure you have style-dictionary installed globally by running `npm install -g style-dictionary`, then clone this repo and `cd ~/[your_path_to_this_repo]` and run `style-dictionary build`

### Build FE components
(more info needed here)
Run `yarn run rollup`

### Developing
- First navigate to your `Iron` project dir `cd ~/Sites/iron`
- Then run `yarn link`
- Then in the `Iron` project run `yarn dev` which will start the rollup watch process
- Now navigate to the frontend repo `cd ~/Sites/citrus`
- Now run `yarn link "@citrus-app/iron"`
- You should now see HMR working and components updating in the app as you develop

### Releasing
- `npm login --scope=@citrus-app --registry=https://npm.pkg.github.com`
- Then login with your Github username, and for the password use the personal access token that you need to create in Github
- tag the version following semver (`$ g tag x.x.x`)
- push the tags & branch

### Roadmap
[... wip ]
