# Project Name

> Project description
Photo gallery scaling

## Related Projects

  - https://github.com/Dragon-Scaling/Reservation_service
  - https://github.com/Dragon-Scaling/photo_gallery_service
  - https://github.com/Dragon-Scaling/Review_service
  - https://github.com/Dragon-Scaling/Recommendations_Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [APIs](#development)

## Usage

> Some usage instructions
 - must comment in image downloader loops.
 - postgres is using windows login due to windows idiosyncracies.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD APIs

 - post('api/property/:propertyId/photos')
 - get('api/property/:propertyId/photos')
 - get('api/property/:propertyId/photos/:photoId')
 - put('api/property/:propertyId/photos/:photoId')
 - delete('api/property/:propertyId/photos/:photoId')

