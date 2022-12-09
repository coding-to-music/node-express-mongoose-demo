/**
 * Expose
 */

module.exports = {
  variants: {
    article: {
      resize: {
        detail: 'x440'
      },
      crop: {},
      resizeAndCrop: {
        mini: { resize: '63504@', crop: '252x210' }
      }
    },

    gallery: {
      crop: {
        thumb: '100x100'
      }
    }
  },

  storage: {
    S3: {
      key: process.env.NEMD_AWS_ACCESS_KEY,
      secret: process.env.NEMD_AWS_SECRET_KEY,
      bucket: process.env.NEMD_AWS_BUCKET_NAME
    }
  },

  debug: true
};
