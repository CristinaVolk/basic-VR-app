export default locations = {
  CityCenter: {
    name: "CityCenter",
    img: "new-college-quadrangle-in-the-city-centre-of-edinburgh.jpg",
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 10.3,
        pitch: 0.1,
        text: "Victoria Street",
        img: "Victoria-Street-Edinburgh.jpg",
      },
      {
        width: 50,
        height: 50,
        yaw: 6.7,
        pitch: 0.16,
        text: "Portobello keith thorburn",
        img: "3-portobello-edinburgh-keith-thorburn.jpg",
      },
      {
        width: 50,
        height: 50,
        yaw: 8.65,
        pitch: 0.16,
        text: "The Elephant House. The birthplace of Happy Potter",
        img: "hp.jpg",
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.4,
        pitch: 0.09,
        goesTo: "Victoria-Street-Edinburgh",
      },
      {
        width: 50,
        height: 50,
        yaw: 6.44,
        pitch: 0.09,
        goesTo: "Portobello",
      },
      {
        width: 50,
        height: 50,
        yaw: 7.96,
        pitch: 0.11,
        goesTo: "ElephantHouse",
      },
    ],
  },
};
