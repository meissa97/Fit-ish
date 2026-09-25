// ============================================================
// TRAINING PROGRAMS DATA
// ------------------------------------------------------------
// This is the ONLY place you need to touch to add/edit/remove a
// workout program or an exercise. Nothing below this object needs
// to change.
//
// Shape:
// trainingPrograms = {
//   <programKey>: {
//     title: "Shown in the workout picker",
//     days: [
//       {
//         id, label, nextLabel,
//         exercises: [ { name, link, sets, reps }, ... ],
//         finisher: { id, exercises: [ {...}, ... ] } | null
//       },
//       ...
//     ]
//   },
//   ...
// }
//
// - "link" can be a single URL string, OR an array of 2 URLs for a
//   superset (two exercises done back-to-back, e.g. curls X extensions).
// - "finisher" is the optional cardio/core block shown after the
//   main exercise table, reached via the "nextLabel" button. Set it
//   to null if a day has no finisher.
//
// TO ADD A NEW PROGRAM: just add a new "key: {...}" entry below,
// following the same shape. It will automatically show up in the
// "Choose your workout" list and work with day-switching, the
// finisher flow and the done screen — no other code changes needed.
// ============================================================
const trainingPrograms = {
  "fl1": {
    "title": "Fat loss - Upper Lower 1",
    "days": [
      {
        "id": "day1",
        "label": "Day 1 - Upper & Cardio",
        "exercises": [
          {
            "name": "Modified Push-ups",
            "link": "https://www.youtube.com/watch?v=GnjOtan1wZ0",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "Lat pull-down",
            "link": "https://youtube.com/shorts/bNmvKpJSWKM?si=0_XLwkXa4tx5IYqv",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Seated Military press",
            "link": "https://youtu.be/9057TE_Gw4o?si=ToeRboeHDRkc2S6o",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "chest flys",
            "link": "https://www.youtube.com/watch?v=Nhvz9EzdJ4U",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "seated cable rows",
            "link": "https://youtube.com/shorts/DHA7QGDa2qg?si=MTlBiCQKoWhlMIM1",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Cable rope hammer curl + Cable overhead extensions",
            "link": [
              "https://youtube.com/shorts/FNIIiNSZ78k?si=r3cs9bseszOqVB-0",
              "https://www.youtube.com/shorts/9Ark9S11uXw"
            ],
            "sets": "3",
            "reps": "15-12 each"
          },
          {
            "name": "lying dumbbells extensions + alternative curls",
            "link": [
              "https://youtu.be/IIBkru_QbVA?si=dJXnRFxGL7py7WzX",
              "https://youtube.com/shorts/WA_I3UZtamI?si=U8nCspBd7cf-4PfT"
            ],
            "sets": "3",
            "reps": "15-12 each"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday1",
          "exercises": [
            {
              "name": "High knees",
              "link": "https://www.youtube.com/watch?v=DfjpR6dzLVg",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "Butt kicks",
              "link": "https://www.youtube.com/watch?v=lVZi-AwxLPo",
              "sets": "3",
              "reps": "20-15"
            },
            {
              "name": "Mountain climbers",
              "link": "https://www.youtube.com/watch?v=w2iTOneGPdU",
              "sets": "4",
              "reps": "10 each"
            }
          ]
        }
      },
      {
        "id": "day2",
        "label": "Day 2 - Lower & Core",
        "exercises": [
          {
            "name": "High squats",
            "link": "https://www.youtube.com/watch?v=iOJWztzaSlk",
            "sets": "4",
            "reps": "20-15"
          },
          {
            "name": "leg press",
            "link": "https://www.youtube.com/shorts/EotSw18oR9w",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Lunges",
            "link": "https://www.youtube.com/watch?v=UpyDdQjBTa0",
            "sets": "4",
            "reps": "10 each"
          },
          {
            "name": "Abductors + adductors",
            "link": [
              "https://www.youtube.com/shorts/uwKOs7z3O3g",
              "https://www.youtube.com/shorts/riEMreTHNbM"
            ],
            "sets": "3",
            "reps": "15 each"
          },
          {
            "name": "lying leg curls",
            "link": "https://www.youtube.com/shorts/yjWAuFOjhuY",
            "sets": "3",
            "reps": "16-12"
          },
          {
            "name": "Standing calves",
            "link": "https://www.youtube.com/watch?v=1xYzGe0EpfY",
            "sets": "3",
            "reps": "20-15"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday2",
          "exercises": [
            {
              "name": "Supermans",
              "link": "https://www.youtube.com/watch?v=67rgxYNKbZY",
              "sets": "4",
              "reps": "15"
            },
            {
              "name": "Bicycle crunches",
              "link": "https://www.youtube.com/shorts/ra177eRilUk",
              "sets": "3",
              "reps": "15 each"
            },
            {
              "name": "Flutter kicks",
              "link": "https://www.youtube.com/watch?v=WRnq49TAv-w",
              "sets": "3",
              "reps": "20 each"
            },
            {
              "name": "heel touches",
              "link": "https://www.youtube.com/watch?v=-89Cqz7KwFs",
              "sets": "3",
              "reps": "10 each"
            }
          ]
        }
      },
      {
        "id": "day3",
        "label": "Day 3 - Upper & Cardio",
        "exercises": [
          {
            "name": "barbell bench press",
            "link": "https://www.youtube.com/shorts/Kq3eUbMc8Ks",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "t-bar rows(wide grip)",
            "link": "https://www.youtube.com/shorts/JfdpHpPZIzg",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "Dumbbells lat raises",
            "link": "https://www.youtube.com/shorts/yny0i0sSDMM",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "pec deck flys",
            "link": "https://www.youtube.com/shorts/IBy-FFalxBA",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "Cable Lat Pullover",
            "link": "https://www.youtube.com/watch?v=Kjew7DbVAD8",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "cable Triceps pushdowns + cable curls",
            "link": [
              "https://www.youtube.com/shorts/imodWgg8LiY",
              "https://www.youtube.com/shorts/4XQLqBelbPw"
            ],
            "sets": "2",
            "reps": "15-12 each"
          },
          {
            "name": "ez bar preacher curls + seated overhead dumbbell extension",
            "link": [
              "https://www.youtube.com/shorts/vh7ZV8MMtHI",
              "https://www.youtube.com/shorts/gKWLcmeVBlQ"
            ],
            "sets": "2",
            "reps": "15-12 each"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday3",
          "exercises": [
            {
              "name": "Side-to-Side Hops",
              "link": "https://youtu.be/NTqBhdYuT6M?si=LqZhZIR6mIX8ksxl",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "toe taps",
              "link": "https://youtube.com/shorts/VYOHSMwzPIo?si=90DtzhIikuOTZOL7",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "scissor jacks",
              "link": "https://youtube.com/shorts/rE5nEh2MVgE?si=apyirxtZEck9LUSa",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "Jumps",
              "link": "https://youtu.be/bIILw7Bsk_M?si=g_bLroos2467DCR-",
              "sets": "2",
              "reps": "50"
            }
          ]
        }
      },
      {
        "id": "day4",
        "label": "Day 4 - Lower & Core",
        "exercises": [
          {
            "name": "Dumbbell sumo squat",
            "link": "https://youtube.com/shorts/n2-eTHee0U0?si=5ZAlR_XmD8lABawX",
            "sets": "4",
            "reps": "15-12"
          },
          {
            "name": "Kneeling squats",
            "link": "https://www.youtube.com/shorts/0W21LU6iZXo",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Ball hamstring curl",
            "link": "https://www.youtube.com/shorts/j0PAFOlyNcM",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "lying isometric abductors",
            "link": "https://www.youtube.com/shorts/vG2gpZBfry4",
            "sets": "3",
            "reps": "20 seconds each"
          },
          {
            "name": "Donkey kicks",
            "link": "https://www.youtube.com/watch?v=QGiiuBOQn3Y",
            "sets": "3",
            "reps": "15 each"
          },
          {
            "name": "Donkey kicks",
            "link": "https://www.youtube.com/watch?v=QGiiuBOQn3Y",
            "sets": "3",
            "reps": "15 each"
          },
          {
            "name": "seated calves",
            "link": "https://www.youtube.com/shorts/tGDmbtvLFMc",
            "sets": "3",
            "reps": "20-15"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday4",
          "exercises": [
            {
              "name": "Supermans",
              "link": "https://www.youtube.com/watch?v=67rgxYNKbZY",
              "sets": "4",
              "reps": "15"
            },
            {
              "name": "plank rolls",
              "link": "https://youtu.be/t3elxPJ1HU4?si=3PRMHVgGnKWpyvYV",
              "sets": "3",
              "reps": "15 each"
            },
            {
              "name": "Flutter kicks",
              "link": "https://www.youtube.com/watch?v=WRnq49TAv-w",
              "sets": "4",
              "reps": "20 each"
            },
            {
              "name": "cocoons",
              "link": "https://www.youtube.com/watch?v=zrZuHi7EeWs",
              "sets": "3",
              "reps": "10"
            }
          ]
        }
      }
    ]
  },
  "fl2": {
    "title": "Fat loss - Upper Lower 2",
    "days": [
      {
        "id": "day1",
        "label": "Day 1 - Upper & Cardio",
        "exercises": [
          {
            "name": "Dumbbell bench press",
            "link": "https://www.youtube.com/watch?v=U2wKgoUAEMo",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "Lat pull-down",
            "link": "https://youtube.com/shorts/bNmvKpJSWKM?si=0_XLwkXa4tx5IYqv",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "Shoulder press machine (side to front)",
            "link": "https://www.youtube.com/shorts/6v4nrRVySj0",
            "sets": "3",
            "reps": "10 - each"
          },
          {
            "name": "incline dumbbell chest flys",
            "link": "https://www.youtube.com/shorts/2q9D23AvjG4",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "neutral-grip seated cable rows",
            "link": "https://www.youtube.com/shorts/ZyZ4QEBqrcQ",
            "sets": "3",
            "reps": "12"
          },
          {
            "name": "dumbbell hammer curl + Dumbbell french press",
            "link": [
              "https://www.youtube.com/shorts/kl_jpIYbKo4",
              "https://www.youtube.com/shorts/lTAUsWRPT-0"
            ],
            "sets": "3",
            "reps": "12-10 each"
          },
          {
            "name": "ez-barbell skull crushers + ez-barbell curls",
            "link": [
              "https://www.youtube.com/shorts/jEaXtSiPsT0",
              "https://www.youtube.com/shorts/54x2WF1_Suc"
            ],
            "sets": "3",
            "reps": "12-10 each"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday1",
          "exercises": [
            {
              "name": "Treadmill Jogging",
              "link": "https://www.youtube.com/watch?v=K6I24WgiiPw",
              "sets": "incline = 2speed = 5-6",
              "reps": "20 Mins"
            },
            {
              "name": "Butt kicks + High knees",
              "link": [
                "https://www.youtube.com/watch?v=lVZi-AwxLPo",
                "https://www.youtube.com/watch?v=DfjpR6dzLVg"
              ],
              "sets": "2",
              "reps": "20 each"
            },
            {
              "name": "Spin bike",
              "link": "https://www.youtube.com/shorts/dieOsJlsvpM",
              "sets": "s = medium",
              "reps": "5 Mins"
            }
          ]
        }
      },
      {
        "id": "day2",
        "label": "Day 2 - Lower & Core",
        "exercises": [
          {
            "name": "High squats",
            "link": "https://www.youtube.com/watch?v=iOJWztzaSlk",
            "sets": "4",
            "reps": "20-15"
          },
          {
            "name": "leg press",
            "link": "https://www.youtube.com/shorts/EotSw18oR9w",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Donkey Kicks",
            "link": "https://www.youtube.com/watch?v=QGiiuBOQn3Y",
            "sets": "4",
            "reps": "10 each"
          },
          {
            "name": "Abductors + adductors",
            "link": [
              "https://www.youtube.com/shorts/uwKOs7z3O3g",
              "https://www.youtube.com/shorts/riEMreTHNbM"
            ],
            "sets": "3",
            "reps": "15 each"
          },
          {
            "name": "seated leg curls",
            "link": "https://www.youtube.com/shorts/_lgE0gPvbik",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Standing calves",
            "link": "https://www.youtube.com/watch?v=1xYzGe0EpfY",
            "sets": "3",
            "reps": "20-15"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday2",
          "exercises": [
            {
              "name": "Supermans",
              "link": "https://www.youtube.com/watch?v=67rgxYNKbZY",
              "sets": "3",
              "reps": "15"
            },
            {
              "name": "Bicycle crunches",
              "link": "https://www.youtube.com/shorts/ra177eRilUk",
              "sets": "3",
              "reps": "15 each"
            },
            {
              "name": "Fast climbers",
              "link": "https://www.youtube.com/watch?v=w2iTOneGPdU",
              "sets": "3",
              "reps": "20 each"
            },
            {
              "name": "Spiderman plank",
              "link": "https://www.youtube.com/watch?v=DVXT7xBA_jU",
              "sets": "3",
              "reps": "10 each"
            }
          ]
        }
      },
      {
        "id": "day3",
        "label": "Day 3 - Upper & Cardio",
        "exercises": [
          {
            "name": "barbell bench press",
            "link": "https://www.youtube.com/shorts/Kq3eUbMc8Ks",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "t-bar rows(wide grip)",
            "link": "https://www.youtube.com/shorts/JfdpHpPZIzg",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "seated lat raises",
            "link": "https://www.youtube.com/watch?v=1hUSrZpQdog",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "Butterfly machine",
            "link": "https://www.youtube.com/shorts/IBy-FFalxBA",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "reverse-grip lat pulldown",
            "link": "https://www.youtube.com/shorts/G1UcT9Cu0ow",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "cable Triceps pushdowns + cable robe curls",
            "link": [
              "https://www.youtube.com/shorts/imodWgg8LiY",
              "https://www.youtube.com/shorts/U-_l17ADMe4"
            ],
            "sets": "2",
            "reps": "15-12 each"
          },
          {
            "name": "incline dumbbell curls",
            "link": "https://www.youtube.com/shorts/uCUaRFlA9vE",
            "sets": "2",
            "reps": "12-10 each"
          },
          {
            "name": "overhead ez cable extension",
            "link": "https://www.youtube.com/shorts/pmcUemVUnP4",
            "sets": "2",
            "reps": "15-12"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday3",
          "exercises": [
            {
              "name": "Treadmill Jogging",
              "link": "https://www.youtube.com/watch?v=K6I24WgiiPw",
              "sets": "incline = 2speed = 5-6",
              "reps": "20 Mins"
            },
            {
              "name": "Butt kicks + High knees",
              "link": [
                "https://www.youtube.com/watch?v=lVZi-AwxLPo",
                "https://www.youtube.com/watch?v=DfjpR6dzLVg"
              ],
              "sets": "2",
              "reps": "20 each"
            },
            {
              "name": "Spin bike",
              "link": "https://www.youtube.com/shorts/dieOsJlsvpM",
              "sets": "s = medium",
              "reps": "5 Mins"
            }
          ]
        }
      },
      {
        "id": "day4",
        "label": "Day 4 - Lower & Core",
        "exercises": [
          {
            "name": "Dumbbell goblet squat",
            "link": "https://www.youtube.com/shorts/hi_fonO6UZY",
            "sets": "4",
            "reps": "15-12"
          },
          {
            "name": "wide V leg press",
            "link": "https://www.youtube.com/shorts/k7W4ssvurQE",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "dumbbell lying leg curls",
            "link": "https://www.youtube.com/shorts/r97tIN2c9_Y",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "lying isometric abductors",
            "link": "https://www.youtube.com/shorts/vG2gpZBfry4",
            "sets": "3",
            "reps": "20 seconds each"
          },
          {
            "name": "banded Glute kick backs",
            "link": "https://www.youtube.com/shorts/CZvQm1vNzD0",
            "sets": "3",
            "reps": "15 each"
          },
          {
            "name": "banded Glute kick backs",
            "link": "https://www.youtube.com/shorts/CZvQm1vNzD0",
            "sets": "3",
            "reps": "15 each"
          },
          {
            "name": "seated calves",
            "link": "https://www.youtube.com/shorts/tGDmbtvLFMc",
            "sets": "3",
            "reps": "20-15"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday4",
          "exercises": [
            {
              "name": "Supermans",
              "link": "https://www.youtube.com/watch?v=67rgxYNKbZY",
              "sets": "3",
              "reps": "15"
            },
            {
              "name": "Bicycle crunches",
              "link": "https://www.youtube.com/shorts/ra177eRilUk",
              "sets": "3",
              "reps": "15 each"
            },
            {
              "name": "Fast climbers",
              "link": "https://www.youtube.com/watch?v=w2iTOneGPdU",
              "sets": "3",
              "reps": "20 each"
            },
            {
              "name": "Spiderman plank",
              "link": "https://www.youtube.com/watch?v=DVXT7xBA_jU",
              "sets": "3",
              "reps": "10 each"
            }
          ]
        }
      }
    ]
  },
  "mb1": {
    "title": "Muscle build - PPLU 1",
    "days": [
      {
        "id": "day1",
        "label": "Day 1 - Push & Cardio",
        "exercises": [
          {
            "name": "Barbell bench press",
            "link": "https://www.youtube.com/watch?v=GnjOtan1wZ0",
            "sets": "3",
            "reps": "8-10"
          },
          {
            "name": "pec deck (chest flys)",
            "link": "https://youtube.com/shorts/bNmvKpJSWKM?si=0_XLwkXa4tx5IYqv",
            "sets": "3",
            "reps": "12-15"
          },
          {
            "name": "overhead dumbbell press",
            "link": "https://youtu.be/9057TE_Gw4o?si=ToeRboeHDRkc2S6o",
            "sets": "3",
            "reps": "8-10"
          },
          {
            "name": "side lateral raises",
            "link": "https://www.youtube.com/watch?v=Nhvz9EzdJ4U",
            "sets": "3",
            "reps": "15-20"
          },
          {
            "name": "Cable Triceps Pushdown",
            "link": "https://youtube.com/shorts/DHA7QGDa2qg?si=MTlBiCQKoWhlMIM1",
            "sets": "3",
            "reps": "12-15"
          },
          {
            "name": "Overhead Rope Triceps",
            "link": "https://youtube.com/shorts/FNIIiNSZ78k?si=r3cs9bseszOqVB-0",
            "sets": "2",
            "reps": "12-15"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday1",
          "exercises": [
            {
              "name": "High knees",
              "link": "https://www.youtube.com/watch?v=DfjpR6dzLVg",
              "sets": "3",
              "reps": "15"
            },
            {
              "name": "Purbees(plank - high arms)",
              "link": "https://www.youtube.com/watch?v=lVZi-AwxLPo",
              "sets": "3",
              "reps": "10"
            },
            {
              "name": "HIIT running",
              "link": "https://www.youtube.com/watch?v=w2iTOneGPdU",
              "sets": "3-5",
              "reps": "20H-40L"
            }
          ]
        }
      },
      {
        "id": "day2",
        "label": "Day 2 - Pull & Core",
        "exercises": [
          {
            "name": "Chest-Supported Rows",
            "link": "https://www.youtube.com/watch?v=iOJWztzaSlk",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "neutral-grip cable rows",
            "link": "https://www.youtube.com/shorts/EotSw18oR9w",
            "sets": "3",
            "reps": "12-15"
          },
          {
            "name": "close-grip lat pulldown",
            "link": "https://www.youtube.com/watch?v=UpyDdQjBTa0",
            "sets": "3",
            "reps": "8-12"
          },
          {
            "name": "Face pulls",
            "link": "https://www.youtube.com/shorts/bcaNXuEKPCI",
            "sets": "3",
            "reps": "15"
          },
          {
            "name": "Wid-grip shrugs",
            "link": "https://www.youtube.com/shorts/bcaNXuEKPCI",
            "sets": "2",
            "reps": "15"
          },
          {
            "name": "Dumbbell Hammer Curl",
            "link": "https://www.youtube.com/shorts/yjWAuFOjhuY",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "Preacher Curl Machine",
            "link": "https://www.youtube.com/shorts/MHFs0cr2FsU",
            "sets": "2",
            "reps": "15-20"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday2",
          "exercises": [
            {
              "name": "Supermans",
              "link": "https://www.youtube.com/watch?v=67rgxYNKbZY",
              "sets": "3",
              "reps": "15"
            },
            {
              "name": "Lying crunches",
              "link": "https://www.youtube.com/shorts/ra177eRilUk",
              "sets": "3",
              "reps": "25"
            },
            {
              "name": "hanging leg raises",
              "link": "https://www.youtube.com/watch?v=WRnq49TAv-w",
              "sets": "3",
              "reps": "12"
            },
            {
              "name": "weighted russian twists",
              "link": "https://www.youtube.com/watch?v=-89Cqz7KwFs",
              "sets": "3",
              "reps": "15 each"
            }
          ]
        }
      },
      {
        "id": "day3",
        "label": "Day 3 - Upper & Cardio",
        "exercises": [
          {
            "name": "Incline Dumbbells press",
            "link": "https://www.youtube.com/shorts/Kq3eUbMc8Ks",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "Single arm rows hammer",
            "link": "https://www.youtube.com/shorts/JfdpHpPZIzg",
            "sets": "3",
            "reps": "10"
          },
          {
            "name": "Wide-grip pull-ups + Push-ups",
            "link": [
              "https://www.youtube.com/shorts/vh7ZV8MMtHI",
              "https://www.youtube.com/shorts/gKWLcmeVBlQ"
            ],
            "sets": "3",
            "reps": "Maxeach"
          },
          {
            "name": "Inclined side lat-raises",
            "link": "https://www.youtube.com/shorts/IBy-FFalxBA",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "inclined dumbbell reverse fly + inclined bench rear rows",
            "link": [
              "https://www.youtube.com/watch?v=Kjew7DbVAD8",
              "https://www.youtube.com/shorts/gKWLcmeVBlQ"
            ],
            "sets": "2",
            "reps": "15 each"
          },
          {
            "name": "Ez bar curls 21 + ez-bar Skull crushers + Triceps bench press",
            "link": [
              "https://www.youtube.com/shorts/imodWgg8LiY",
              "https://www.youtube.com/shorts/4XQLqBelbPw",
              "https://www.youtube.com/shorts/4XQLqBelbPw"
            ],
            "sets": "3",
            "reps": "21X12 each"
          },
          {
            "name": "Biceps singles super-finisher + Triceps singles super-finisher",
            "link": [
              "https://www.youtube.com/shorts/vh7ZV8MMtHI",
              "https://www.youtube.com/shorts/gKWLcmeVBlQ"
            ],
            "sets": "2",
            "reps": "15-12 each"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday3",
          "exercises": [
            {
              "name": "Side-to-Side Hops",
              "link": "https://youtu.be/NTqBhdYuT6M?si=LqZhZIR6mIX8ksxl",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "toe taps",
              "link": "https://youtube.com/shorts/VYOHSMwzPIo?si=90DtzhIikuOTZOL7",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "scissor jacks",
              "link": "https://youtube.com/shorts/rE5nEh2MVgE?si=apyirxtZEck9LUSa",
              "sets": "4",
              "reps": "20-15"
            },
            {
              "name": "Jumps",
              "link": "https://youtu.be/bIILw7Bsk_M?si=g_bLroos2467DCR-",
              "sets": "2",
              "reps": "50"
            }
          ]
        }
      },
      {
        "id": "day4",
        "label": "Day 4 - Legs & Core",
        "exercises": [
          {
            "name": "Leg extensions",
            "link": "https://youtube.com/shorts/n2-eTHee0U0?si=5ZAlR_XmD8lABawX",
            "sets": "3",
            "reps": "15-12"
          },
          {
            "name": "SLOW Leg curls",
            "link": "https://www.youtube.com/shorts/0W21LU6iZXo",
            "sets": "3",
            "reps": "15"
          },
          {
            "name": "SQUATS",
            "link": "https://www.youtube.com/shorts/j0PAFOlyNcM",
            "sets": "3",
            "reps": "20-15"
          },
          {
            "name": "Hip thrusts",
            "link": "https://www.youtube.com/shorts/vG2gpZBfry4",
            "sets": "3",
            "reps": "12-10"
          },
          {
            "name": "Standing calves",
            "link": "https://www.youtube.com/watch?v=QGiiuBOQn3Y",
            "sets": "2",
            "reps": "20"
          },
          {
            "name": "Standing calves",
            "link": "https://www.youtube.com/watch?v=QGiiuBOQn3Y",
            "sets": "2",
            "reps": "20"
          },
          {
            "name": "seated calves",
            "link": "https://www.youtube.com/shorts/tGDmbtvLFMc",
            "sets": "2",
            "reps": "20"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday4",
          "exercises": [
            {
              "name": "Supermans",
              "link": "https://www.youtube.com/watch?v=67rgxYNKbZY",
              "sets": "4",
              "reps": "15"
            },
            {
              "name": "plank rolls",
              "link": "https://youtu.be/t3elxPJ1HU4?si=3PRMHVgGnKWpyvYV",
              "sets": "3",
              "reps": "15 each"
            },
            {
              "name": "Flutter kicks",
              "link": "https://www.youtube.com/watch?v=WRnq49TAv-w",
              "sets": "4",
              "reps": "20 each"
            },
            {
              "name": "cocoons",
              "link": "https://www.youtube.com/watch?v=zrZuHi7EeWs",
              "sets": "3",
              "reps": "10"
            }
          ]
        }
      }
    ]
  },
  "mb2": {
    "title": "Muscle build - PPLF 2",
    "days": [
      {
        "id": "day1",
        "label": "Day 1 - Push",
        "exercises": [
          {
            "name": "flat dumbbell bench press",
            "link": "https://www.youtube.com/shorts/WbCEvFA0NJs",
            "sets": "3",
            "reps": "8-10"
          },
          {
            "name": "incline dumbbell flys",
            "link": "https://www.youtube.com/shorts/aBEHkzfe4yc",
            "sets": "3",
            "reps": "12-15"
          },
          {
            "name": "high-to-low cable crossovers",
            "link": "https://www.youtube.com/shorts/CYviQI1Mnwg",
            "sets": "2",
            "reps": "12-15"
          },
          {
            "name": "barbell wide-grip military press",
            "link": "https://www.youtube.com/shorts/zoN5EH50Dro",
            "sets": "3",
            "reps": "8-12"
          },
          {
            "name": "plate front raises",
            "link": "https://www.youtube.com/shorts/yHQi_GUNc5o",
            "sets": "2",
            "reps": "15"
          },
          {
            "name": "dumbbell french press",
            "link": "https://www.youtube.com/shorts/b_r_LW4HEcM",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "cable triceps kickbacks",
            "link": "https://www.youtube.com/shorts/7_C9_SWHZbo",
            "sets": "2",
            "reps": "12-15"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday1",
          "exercises": [
            {
              "name": "Treadmill Jogging",
              "link": "https://www.youtube.com/watch?v=K6I24WgiiPw",
              "sets": "incline = 2speed = 5-6",
              "reps": "20 Mins"
            },
            {
              "name": "Butt kicks + High knees",
              "link": [
                "https://www.youtube.com/watch?v=lVZi-AwxLPo",
                "https://www.youtube.com/watch?v=DfjpR6dzLVg"
              ],
              "sets": "2",
              "reps": "20 each"
            },
            {
              "name": "Spin bike",
              "link": "https://www.youtube.com/shorts/dieOsJlsvpM",
              "sets": "s = medium",
              "reps": "5 Mins"
            }
          ]
        }
      },
      {
        "id": "day2",
        "label": "Day 2 - Pull",
        "exercises": [
          {
            "name": "lat pull-downs",
            "link": "https://www.youtube.com/shorts/5s6KGLTMgoI",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "cable rows",
            "link": "https://www.youtube.com/shorts/qD1WZ5pSuvk",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "t-bar narrow-grip",
            "link": "https://www.youtube.com/shorts/36sT4np_G1E",
            "sets": "3",
            "reps": "8-12"
          },
          {
            "name": "incline dumbbell Y raises",
            "link": "https://www.youtube.com/watch?v=6ypV9s2KwtU",
            "sets": "3",
            "reps": "15"
          },
          {
            "name": "machine reverse flys",
            "link": "https://www.youtube.com/shorts/7tgx6QHB0-A",
            "sets": "2",
            "reps": "15"
          },
          {
            "name": "incline dumbbell curls",
            "link": "https://www.youtube.com/shorts/uCUaRFlA9vE",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "dumbbell preacher curls",
            "link": "https://www.youtube.com/shorts/oHHNXMLvs1c",
            "sets": "2",
            "reps": "15-20"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday2",
          "exercises": [
            {
              "name": "hyperextensions",
              "link": "https://www.youtube.com/shorts/waqxM9HvqWg",
              "sets": "2",
              "reps": "15-20"
            },
            {
              "name": "Bicycle crunches",
              "link": "https://www.youtube.com/shorts/ra177eRilUk",
              "sets": "4",
              "reps": "15 each"
            },
            {
              "name": "plank",
              "link": "https://www.youtube.com/shorts/xe2MXatLTUw",
              "sets": "2",
              "reps": "60-90 sec"
            },
            {
              "name": "treadmill jogging",
              "link": "https://www.youtube.com/watch?v=K6I24WgiiPw",
              "sets": "incline=4speed=4",
              "reps": "15 mins"
            }
          ]
        }
      },
      {
        "id": "day3",
        "label": "Day 3 - Legs",
        "exercises": [
          {
            "name": "Single leg extensionsXdouble leg extensions",
            "link": "https://www.youtube.com/shorts/d3d2yz7V26c",
            "sets": "3",
            "reps": "10-12 each"
          },
          {
            "name": "Standing leg curls",
            "link": "https://www.youtube.com/shorts/SXe7IR9QP2E",
            "sets": "3",
            "reps": "12 each"
          },
          {
            "name": "leg press",
            "link": "https://www.youtube.com/shorts/EotSw18oR9w",
            "sets": "3",
            "reps": "10-12"
          },
          {
            "name": "Abductors + adductors",
            "link": [
              "https://www.youtube.com/shorts/uwKOs7z3O3g",
              "https://www.youtube.com/shorts/riEMreTHNbM"
            ],
            "sets": "3",
            "reps": "12 each"
          },
          {
            "name": "Leg press calves raises",
            "link": "https://www.youtube.com/shorts/-pktcXXJo7A",
            "sets": "3",
            "reps": "15"
          },
          {
            "name": "Donkey calves",
            "link": "https://www.youtube.com/shorts/watMaxAQBCU",
            "sets": "3",
            "reps": "15"
          }
        ],
        "nextLabel": "Go to Cardio ❤️‍🔥",
        "finisher": {
          "id": "cday3",
          "exercises": [
            {
              "name": "Treadmill Jogging",
              "link": "https://www.youtube.com/watch?v=K6I24WgiiPw",
              "sets": "incline = 2speed = 5-6",
              "reps": "20 Mins"
            },
            {
              "name": "Butt kicks + High knees",
              "link": [
                "https://www.youtube.com/watch?v=lVZi-AwxLPo",
                "https://www.youtube.com/watch?v=DfjpR6dzLVg"
              ],
              "sets": "2",
              "reps": "20 each"
            },
            {
              "name": "Spin bike",
              "link": "https://www.youtube.com/shorts/dieOsJlsvpM",
              "sets": "s = medium",
              "reps": "5 Mins"
            }
          ]
        }
      },
      {
        "id": "day4",
        "label": "Day 4 - Full-body",
        "exercises": [
          {
            "name": "front Squats",
            "link": "https://www.youtube.com/shorts/_qv0m3tPd3s",
            "sets": "3",
            "reps": "8-10"
          },
          {
            "name": "reverse-grip bench press",
            "link": "https://www.youtube.com/watch?v=_y5VJGlk32I",
            "sets": "3",
            "reps": "10"
          },
          {
            "name": "barbell rows",
            "link": "https://www.youtube.com/shorts/phVtqawIgbk",
            "sets": "3",
            "reps": "10"
          },
          {
            "name": "Arnold press",
            "link": "https://www.youtube.com/shorts/g4GUrEFoBxY",
            "sets": "3",
            "reps": "10"
          },
          {
            "name": "barbell lunges",
            "link": "https://www.youtube.com/watch?v=jfE5UTunYik",
            "sets": "2",
            "reps": "10 each"
          },
          {
            "name": "barbell lunges",
            "link": "https://www.youtube.com/watch?v=jfE5UTunYik",
            "sets": "2",
            "reps": "10 each"
          },
          {
            "name": "Supinated dumbbell curls",
            "link": "https://www.youtube.com/shorts/MKWBV29S6c0",
            "sets": "3",
            "reps": "10 each"
          },
          {
            "name": "Standing Barbell Tricep Extension",
            "link": "https://www.youtube.com/watch?v=ebyvvmmA00k",
            "sets": "3",
            "reps": "10 each"
          },
          {
            "name": "standing calf raises",
            "link": "https://www.youtube.com/shorts/xwszHjl2D40",
            "sets": "3",
            "reps": "10 each"
          }
        ],
        "nextLabel": "Go to Core ✊",
        "finisher": {
          "id": "cday4",
          "exercises": [
            {
              "name": "hyperextensions",
              "link": "https://www.youtube.com/shorts/waqxM9HvqWg",
              "sets": "2",
              "reps": "15-20"
            },
            {
              "name": "cable crunches",
              "link": "https://www.youtube.com/shorts/K2m0jj6RfYg",
              "sets": "4",
              "reps": "15 each"
            },
            {
              "name": "kneeling vacuum",
              "link": "https://www.youtube.com/watch?v=sog_T7rGYjo",
              "sets": "2",
              "reps": "60-90 sec"
            },
            {
              "name": "treadmill jogging",
              "link": "https://www.youtube.com/watch?v=K6I24WgiiPw",
              "sets": "incline=4speed=4",
              "reps": "15 mins"
            }
          ]
        }
      }
    ]
  }
}
;

// ============================================================
// APP LOGIC — DOM rendering + hash-based navigation
// (You shouldn't need to edit anything below this line.)
// ============================================================

const screens = {
  home: document.getElementById('screen-home'),
  workouts: document.getElementById('screen-workouts'),
  program: document.getElementById('screen-program'),
  done: document.getElementById('screen-done'),
};

const programBody = document.getElementById('program-body');
const daySelect = document.getElementById('schedDays');
const programTitleEl = document.getElementById('program-title');

let currentProgramKey = null;

// ---- helpers -------------------------------------------------

// Re-trigger any CSS keyframe/transition animations that are bound
// to an element's class (e.g. a fade/slide-in defined in style.css
// for .landing, .main-div, etc). Simply toggling display doesn't
// restart a CSS animation, so we force a reflow between removing
// and re-adding the classes.
function replayAnimation(el) {
  if (!el) return;
  const cls = el.className;
  el.className = '';
  void el.offsetWidth; // force reflow
  el.className = cls;
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    if (!el) return;
    el.style.display = key === name ? '' : 'none';
  });
  replayAnimation(screens[name]);
  window.scrollTo(0, 0);
}

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.id) node.id = opts.id;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.href !== undefined) node.href = opts.href;
  if (opts.target !== undefined) node.target = opts.target;
  if (opts.type !== undefined) node.type = opts.type;
  if (opts.attrs) {
    Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  }
  children.forEach(c => c && node.appendChild(c));
  return node;
}

// Build a single exercise <tr> from a data object.
// Supports a single link (string) or a superset (array of 2 links).
function buildExerciseRow(ex) {
  const tdDone = el('td', {}, [el('input', { type: 'checkbox' })]);

  const tdName = el('td');
  if (Array.isArray(ex.link)) {
    ex.name.split(' + ').forEach((part, i) => {
      if (i > 0) {
        tdName.appendChild(document.createElement('br'));
        tdName.appendChild(document.createTextNode('X'));
        tdName.appendChild(document.createElement('br'));
      }
      tdName.appendChild(el('a', { href: ex.link[i], target: '_blank', text: part.trim() }));
    });
  } else if (ex.link) {
    tdName.appendChild(el('a', { href: ex.link, target: '_blank', text: ex.name }));
  } else {
    tdName.textContent = ex.name;
  }

  const tdSets = el('td', { text: ex.sets });
  const tdReps = el('td', { text: ex.reps });

  return el('tr', {}, [tdDone, tdName, tdSets, tdReps]);
}

// Build a full <table> of exercises from a data array.
function buildExerciseTable(exercises) {
  const thead = el('thead', {}, [
    el('tr', {}, [
      el('th', { text: 'Done' }),
      el('th', { text: 'Exercise' }),
      el('th', { text: 'Sets' }),
      el('th', { text: 'Reps' }),
    ]),
  ]);
  const tbody = el('tbody', {}, exercises.map(buildExerciseRow));
  return el('table', {}, [thead, tbody]);
}

// Build one <section class="schedule day-content"> — either a main
// day (with a "next" button into its finisher) or a finisher
// (with a "done" button into the done screen).
function buildDaySection(day, program) {
  const section = el('section', { class: 'schedule day-content', id: day.id, attrs: { style: 'display:none;' } });
  section.appendChild(buildExerciseTable(day.exercises));

  if (day.finisher) {
    const btn = el('div', { class: 'btn start', id: `start-${day.id}`, text: day.nextLabel });
    btn.addEventListener('click', () => {
      section.style.display = 'none';
      showFinisher(day, program);
    });
    section.appendChild(el('div', {}, [btn]));
  } else {
    section.appendChild(buildDoneButton());
  }
  return section;
}

function buildFinisherSection(finisher) {
  const section = el('section', { class: 'schedule day-content', id: finisher.id, attrs: { style: 'display:none;' } });
  section.appendChild(buildExerciseTable(finisher.exercises));
  section.appendChild(buildDoneButton());
  return section;
}

function buildDoneButton() {
  const wrap = el('div');
  const link = el('a', { class: 'btn', id: 'done', text: ' \ud83d\udcaa Are we done? \ud83d\udd25' });
  link.href = '#/done';
  wrap.appendChild(link);
  return wrap;
}

function showFinisher(day, program) {
  let finEl = document.getElementById(day.finisher.id);
  if (!finEl) {
    finEl = buildFinisherSection(day.finisher);
    programBody.appendChild(finEl);
  }
  finEl.style.display = 'block';
  replayAnimation(finEl);
}

// ---- render a whole program screen from trainingPrograms[key] ----
function renderProgram(key) {
  const program = trainingPrograms[key];
  if (!program) {
    location.hash = '#/workouts';
    return;
  }
  currentProgramKey = key;
  programTitleEl.textContent = program.title;

  // reset select + body
  daySelect.innerHTML = '';
  daySelect.appendChild(el('option', { attrs: { value: 'nod', disabled: '', selected: '', hidden: '' }, text: 'Please select your day...' }));
  programBody.innerHTML = '';

  program.days.forEach((day, i) => {
    daySelect.appendChild(el('option', { attrs: { value: `d${i + 1}` }, text: day.label }));
    programBody.appendChild(buildDaySection(day, program));
  });
}

daySelect.addEventListener('change', function () {
  document.querySelectorAll('#program-body .day-content').forEach(sec => {
    sec.style.display = 'none';
  });
  const program = trainingPrograms[currentProgramKey];
  const idx = parseInt(this.value.replace('d', ''), 10) - 1;
  const day = program.days[idx];
  const target = document.getElementById(day.id);
  if (target) {
    target.style.display = 'block';
    replayAnimation(target);
  }
});

// ---- build the "choose your workout" list from the data object ----
function renderWorkoutsList() {
  const ul = document.getElementById('workouts-list');
  ul.innerHTML = '';
  Object.entries(trainingPrograms).forEach(([key, program]) => {
    const a = el('a', { href: `#/program/${key}`, text: program.title });
    ul.appendChild(el('li', {}, [a]));
  });
}

// ---- hash router ----
function route() {
  const hash = location.hash || '#/';
  const parts = hash.replace(/^#\//, '').split('/').filter(Boolean);

  if (parts.length === 0) {
    showScreen('home');
  } else if (parts[0] === 'workouts') {
    renderWorkoutsList();
    showScreen('workouts');
  } else if (parts[0] === 'program' && parts[1]) {
    renderProgram(parts[1]);
    showScreen('program');
  } else if (parts[0] === 'done') {
    showScreen('done');
  } else {
    showScreen('home');
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
