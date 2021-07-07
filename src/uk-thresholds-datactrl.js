const UKThresholdsDataCtrl = (() => {
  const twentyOneTwo = {
    personalAlowance :{
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
        t: [12500, 50270],
        p: 20
      },
      highRate: {
        t: [50271, 150000],
        p: 40
      },
      additional: {
      p: 45
      }
    }
  }
  const twentyTwentyOne = {
    personalAlowance :{
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
    }
  }
  const nighteenTwenty = {
    personalAlowance :{
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
    }    
  }
  const eighteenNighteen = {
    personalAlowance :{
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
    }
    
  }
  const seventeenEighteen = {
    personalAlowance :{
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
    }
    
  }
  const sixteenSeventeen = {
    personalAlowance :{
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
    }
    
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
