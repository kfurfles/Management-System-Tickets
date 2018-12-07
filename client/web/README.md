# SystemTicket

  

## Install "gsutil", follow [this link](https://cloud.google.com/storage/docs/gsutil_install?hl=pt-br)

  
## after installing "gsutil", you should enable cors in this storage image firebase project with the command below.

```
gsutil cors set cors.json gs://<your-cloud-storage-bucket>
```

##### For more information check the [official documentation](https://firebase.google.com/docs/storage/web/download-files?hl=pt-br)

## Create a document named "config-firebase.js" in the src/ directory and put the project data following the example of the file "config-firebase.js_exaple"

  

## Project setup

```

yarn install

```


### Compiles and hot-reloads for development

```

yarn run serve

```

  
### Compiles and minifies for production

```

yarn run build

```

  
### Lints and fixes files

```

yarn run lint

```