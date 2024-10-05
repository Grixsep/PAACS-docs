# PAACS Documentation

![Build Status](https://gitlab.com/pages/docusaurus/badges/master/pipeline.svg)

---

Welcome to the PAACS Documentation Page at https://paacs.pro/docs !

We strive to make these docs easy for you to use.

We are continuously expanding the website with guides and tutorials for most use-cases.

## Make changes locally and test

If you want to make changes to docs and see the changes happening locally
before pushing the changes, simply run:
```bash
docker run -it --network=host -v <PathToDocs>/drupal-documentation/docs:/test -w /test node:16 bash
# Once inside the container
## If you are runinng for the first time
npm install
## To start serving the content
npm start
# Now dev website should be avaialble on localhost:3000/
````

## Contact

If you have any questions or concerns, please refer to the 
