module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f671ef068fee15e9ac904d25af0879b6'),
  },
});
