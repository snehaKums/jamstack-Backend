module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('https://pure-dawn-42818.herokuapp.com/'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '107ae783675acaafbe7a0990b9c1d2f2'),
    },
  },
});
// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', '6c4965035b83330766bff14190012528'),
//     },
//   },
// });

