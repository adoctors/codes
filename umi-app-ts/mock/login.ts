export default {
  'POST /api/login': (req, res) => {
    console.log(req.body)
    // const size = 10;
    // const page = Number(req.body.page);
    const data = {
      code: 0,
      data: {
        name: 'adoctors',
        age: 18,
      },
      message: true,
    };
    res.send(data);
  },
};
