const UKThresholdsDataCtrl = (() => {
  const twentyOneTwo = {
    year: [2021, 2022],
    personalAllowance :{
      t: 12570,
      p: 0,
    },
    scot: {
      starterRate: {
        t: [12571, 14667],
        p: 19
      },
      basicRate: {
        t: [14668, 25296],
        p: 20
      },
      intRate: {
        t: [25297, 43662],
        p: 21
      },
      highRate: {
        t: [43663, 150000],
        p: 41, 
      },
      additionalRate: {
        p: 46
      }
    },
    engWalNi: {
      basicRate: {
        t: [12570, 50270],
        p: 20
      },
      highRate: {
        t: [50271, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    },
    dividends: 2000,
    stampDuty: [
      {price: 250000, rate: 'Zero'},
      {price: 925000, rate: 5},
      {price: 1.5, rate: 12},
    ]
  }
  const twentyTwentyOne = {
    year: [2020, 2021],
    personalAllowance :{
      t: 12500,
      p: 0,
    },
    scot: {
      starterRate: {
        t: [12501, 14585],
        p: 19
      },
      basicRate: {
        t: [14586, 25158],
        p: 20
      },
      intRate: {
        t: [25159, 43430],
        p: 21
      },
      highRate: {
        t: [43431, 150000],
        p: 41, 
      },
      additionalRate: {
        p: 46
      }
    },
    engWalNi: {
      basicRate: {
        t: [12500, 50000],
        p: 20
      },
      highRate: {
        t: [50000, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    },
    dividends: 2000,
    stampDuty: [
      {price: 500000, rate: 'Zero'},
      {price: 925000, rate: 5},
      {price: 1.5, rate: 12},
    ]
  }
  const nighteenTwenty = {
    year: [2019, 2020],
    personalAllowance :{
      t: 12500,
      p: 0,
    },
    scot: {
      starterRate: {
        t: [12501, 14549],
        p: 19
      },
      basicRate: {
        t: [14550, 24944],
        p: 20
      },
      intRate: {
        t: [24945, 43430],
        p: 21
      },
      highRate: {
        t: [43431, 150000],
        p: 41, 
      },
      additionalRate: {
        p: 46
      }
    },
    engWalNi: {
      basicRate: {
        t: [12500, 50000],
        p: 20
      },
      highRate: {
        t: [50000, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    },
    dividends: 2000,
    stampDuty: [
      {price: 125000, rate: 'Zero'},
      {price: 250000, rate: 2},
      {price: 1.5, rate: 12},
    ]    
  }
  const eighteenNighteen = {
    year: [2018, 2019],
    personalAllowance :{
      t: 11850,
      p: 0,
    },
    scot: {
      starterRate: {
        t: [11851, 13850],
        p: 19
      },
      basicRate: {
        t: [13851, 24000],
        p: 20
      },
      intRate: {
        t: [24001, 43430],
        p: 21
      },
      highRate: {
        t: [43431, 150000],
        p: 41, 
      },
      additionalRate: {
        p: 46
      }
    },
    engWalNi: {
      basicRate: {
        t: [11850, 46350],
        p: 20
      },
      highRate: {
        t: [46350, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    },
    dividends: 2000
  }
  const seventeenEighteen = {
    year: [2017, 2018],
    personalAllowance :{
      t: 11500,
      p: 0,
    },
    scot: {
      starterRate: {
        t: [11500, 43000],
        p: 20
      },
      highRate: {
        t: [43000, 150000],
        p: 40, 
      },
      additionalRate: {
        p: 45
      }
    },
    engWalNi: {
      basicRate: {
        t: [11500, 46000],
        p: 20
      },
      highRate: {
        t: [46000, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    },
    dividends: 5000
    
  }
  const sixteenSeventeen = {
    year: [2016, 2017],
    personalAllowance :{
      t: 11500,
      p: 0,
    },
    scot: {
      starterRate: {
        t: [11500, 43000],
        p: 20
      },
      highRate: {
        t: [43000, 150000],
        p: 40, 
      },
      additionalRate: {
        p: 45
      }
    },
    engWalNi: {
      basicRate: {
        t: [11500, 46000],
        p: 20
      },
      highRate: {
        t: [46000, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    },
    dividends: 5000
    
  }
  return {
    getThresholds: (option) => {
      if(option === '21-22') return twentyOneTwo
      if(option === '20-21') return twentyTwentyOne
      if(option === '19-20') return nighteenTwenty
      if(option === '18-19') return eighteenNighteen
      if(option === '17-18') return seventeenEighteen
      if(option === '16-17') return sixteenSeventeen
    }
  }
})()
