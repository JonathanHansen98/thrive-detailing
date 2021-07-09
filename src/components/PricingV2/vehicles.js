import React from 'react';
import CarIcon from '../../svg/Car.svg';
import BoatIcon from '../../svg/Boat.svg';
import RVIcon from '../../svg/RV.svg';
import SuvIcon from '../../svg/Suv.svg';
import TruckIcon from '../../svg/Truck.svg';
import VanIcon from '../../svg/Van.svg';

const iconStyle = {
  width: 50,
  height: 50
};

const common = {
  basic: function (price) {
    return {
      title: 'Basic Detail',
      price: price,
      details: [
        "Exterior hand wash.",
        "Spray Wax.",
        "Interior vacuum carpets & floor.",
        "Interior mats.",
        "Light wipe down of all surfaces.",
        "Window Clean."
      ]
    }
  },
  ultimate: function (price) {
    return {
      title: 'Ultimate Detail',
      price: price,
      details: [
        "Exterior hand wash.",
        "Clay bar.",
        "Wheels & wheel wells cleaned & dressed.",
        "Door jams cleaned.",
        "Windows cleaned inside & out.",
        "Shampoo(extract)/ steam carpets, seats & trunk.",
        "Chrome polishing.",
        "Leather recondition treatment.",
        "Buff & wax.",
      ]
    }
  },
  interior: function (price) {
    return {
      title: 'Interior Only',
      price: price,
      details: [
        "Vacuum carpets & floor.",
        "Shampoo carpets & seats.",
        "Leather treatment.",
        "Door panels.",
        "Dash wipe down.",
        "Headliner clean.",
        "Sanitation.",
      ]
    }
  },
  exterior: function (price) {
    return {
      title: 'Exterior Only',
      price: price,
      details: [
        'Full exterior wash.',
        'Paint decontamination.',
        'Clay bar.',
        'Wheels cleaned.',
        'trim dressing.',
        'Door jams',
        'Windows',
        'Ceramic wax for months protection'
      ]
    }
  },
  paint: function (start, end) {
    return {
      title: 'Paint Correction',
      price: `${start} - $${end}`,
      details: []
    }
  },
  ceramic: function (start, end) {
    return {
      title: 'Ceramic Coating',
      price: `${start} - $${end}`,
      details: [
        'UV ray protection.',
        'Protects from paint fade, oxidation and debree from trees and birds',
        'Long lasting shine',
        'EASY maintenance',
        '1-7 years of protection'
      ]
    }
  },
  extra: function (price) {
    return {
      title: 'Extra Care',
      price: price,
      details: []
    }
  }
};

const vehicles = [
  {
    name: 'Car',
    icon: <CarIcon width={iconStyle.width} height={iconStyle.height} />,
    services: [
      common.basic(100),
      common.ultimate(250),
      common.interior(200),
      common.exterior(100),
      common.ceramic(750, 900),
      common.paint(450, 550),
    ]
  },
  {
    name: 'SUV',
    icon: <SuvIcon width={iconStyle.width} height={iconStyle.height} />,
    services: [
      common.basic(125),
      common.ultimate(310),
      common.interior(250),
      common.exterior(125),
      common.ceramic(850, 1050),
      common.paint(550, 750),
    ]
  },
  {
    name: 'Truck',
    icon: <TruckIcon width={iconStyle.width} height={iconStyle.height} />,
    services: [
      common.basic(135),
      common.ultimate(290),
      common.interior(225),
      common.exterior(135),
      common.ceramic(900, 1100),
      common.paint(550, 750),
    ]
  },
  {
    name: 'Van',
    icon: <VanIcon width={iconStyle.width} height={iconStyle.height} />,
    services: [
      common.basic(150),
      common.ultimate(365),
      common.interior(290),
      common.exterior(150),
      common.ceramic(1000, 1200),
      common.paint(650, 850),
    ]
  },
  {
    name: 'RV',
    icon: <RVIcon width={iconStyle.width} height={iconStyle.height} />,
    services: [
      {
        title: 'Basic Detail (RV/Trailer)',
        price: 225,
        details: [
          'Full wash including roof.',
          'Wax for protection.',
          'Wheels cleaned & dressed.',
          'Windows cleaned.'
        ]
      },
      common.paint(750, 900),
      common.ceramic(1100, 1500)
    ]
  },
  {
    name: 'Boat',
    icon: <BoatIcon width={iconStyle.width} height={iconStyle.height} />,
    services: [
      {
        title: 'Basic Detail (Boat)',
        price: 175,
        details: [
          'Wash.',
          'Detail spray.',
          'Trailer wash included.',
          'Wheels cleaned & dressed.',
          'Light upholstery wipe down & dressed for protection',
        ]
      },
      common.paint(450, 600),
      common.ceramic(1000, 1500),
    ]
  }
];

export default vehicles;