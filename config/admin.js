module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b9dfd04b521f9b82feea011314757d15'),
  },
});
