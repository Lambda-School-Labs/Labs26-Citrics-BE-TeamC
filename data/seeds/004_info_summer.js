exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('info_summer').del()
    .then(function () {
      // Inserts seed entries
      return knex('info_summer').insert([
        {
          maxtempF: 48.591912568306,
          FeelsLikeF: 41.787322404371565,
          mintempF: 39.04306010928957,
          maxtempC: 9.237158469945355,
          FeelsLikeC: 5.456830601092896,
          mintempC: 3.93224043715847,
          precipMM: 6.230273224043704,
          totalSnow_cm: 0.5083060109289619,
          uvIndex: 2.273224043715847,
          DewPointC: 4.510382513661202,
          HeatIndexC: 6.615300546448087,
          WindChillC: 5.456830601092896,
          WindGustKmph: 10.302732240437159,
          cloudcover: 69.68196721311476,
          humidity: 87.46120218579235,
          pressure: 1013.8775956284153,
          visibility: 7.0415300546448085,
          windspeedKmph: 6.443715846994536,
          location_id: 1
        },
        {
          maxtempF: 86.68699453551915,
          FeelsLikeF: 79.80568306010932,
          mintempF: 67.16633879781416,
          maxtempC: 30.401092896174863,
          FeelsLikeC: 26.578142076502733,
          mintempC: 19.556284153005464,
          precipMM: 1.982076502732241,
          totalSnow_cm: 0,
          uvIndex: 6.242622950819672,
          DewPointC: 18.683060109289617,
          HeatIndexC: 26.718032786885246,
          WindChillC: 24.653551912568307,
          WindGustKmph: 12.860109289617487,
          cloudcover: 32.334426229508196,
          humidity: 72.29071038251367,
          pressure: 1014.8830601092897,
          visibility: 8.98360655737705,
          windspeedKmph: 8.005464480874316,
          location_id: 2
        },
        {
          maxtempF: 75.23781420765017,
          FeelsLikeF: 62.911256830601154,
          mintempF: 52.14863387978142,
          maxtempC: 24.040437158469945,
          FeelsLikeC: 17.192349726775955,
          mintempC: 11.21311475409836,
          precipMM: 0.6463387978142077,
          totalSnow_cm: 0,
          uvIndex: 4.825136612021858,
          DewPointC: 8.04808743169399,
          HeatIndexC: 17.571584699453553,
          WindChillC: 17.229508196721312,
          WindGustKmph: 12.884153005464482,
          cloudcover: 33.0655737704918,
          humidity: 61.966120218579235,
          pressure: 1014.063387978142,
          visibility: 8.573770491803279,
          windspeedKmph: 8.512568306010929,
          location_id: 3
        },
        {
          maxtempF: 95.8601092896175,
          FeelsLikeF: 87.71584699453547,
          mintempF: 76.22732240437152,
          maxtempC: 35.49726775956284,
          FeelsLikeC: 30.972677595628415,
          mintempC: 24.59016393442623,
          precipMM: 0.47103825136612026,
          totalSnow_cm: 0,
          uvIndex: 7.4841530054644805,
          DewPointC: 6.9573770491803275,
          HeatIndexC: 30.96502732240437,
          WindChillC: 31.12568306010929,
          WindGustKmph: 13.638251366120219,
          cloudcover: 11.860109289617487,
          humidity: 25.410928961748635,
          pressure: 1010.1540983606558,
          visibility: 10.04808743169399,
          windspeedKmph: 9.67431693989071,
          location_id: 4
        },
        {
          maxtempF: 85.9020765027323,
          FeelsLikeF: 72.54076502732237,
          mintempF: 57.428633879781394,
          maxtempC: 29.96502732240437,
          FeelsLikeC: 22.54207650273224,
          mintempC: 14.146448087431693,
          precipMM: 0.3948633879781421,
          totalSnow_cm: 0,
          uvIndex: 5.782513661202186,
          DewPointC: 9.530054644808743,
          HeatIndexC: 22.683060109289617,
          WindChillC: 22.476502732240437,
          WindGustKmph: 12.408743169398907,
          cloudcover: 14.127868852459017,
          humidity: 50.44808743169399,
          pressure: 1012.7497267759563,
          visibility: 9.931147540983607,
          windspeedKmph: 8.509289617486338,
          location_id: 5
        },
        {
          maxtempF: 76.34338797814202,
          FeelsLikeF: 62.85027322404372,
          mintempF: 51.81814207650269,
          maxtempC: 24.654644808743168,
          FeelsLikeC: 17.15846994535519,
          mintempC: 11.029508196721311,
          precipMM: 1.30688524590164,
          totalSnow_cm: 0.1556284153005464,
          uvIndex: 4.911475409836066,
          DewPointC: 3.8251366120218577,
          HeatIndexC: 17.668852459016392,
          WindChillC: 17.283060109289618,
          WindGustKmph: 17.224043715846996,
          cloudcover: 21.744262295081967,
          humidity: 45.83606557377049,
          pressure: 1013.616393442623,
          visibility: 9.833879781420766,
          windspeedKmph: 10.950819672131148,
          location_id: 6
        },
        {
          maxtempF: 73.82338797814202,
          FeelsLikeF: 64.99650273224042,
          mintempF: 54.674535519125754,
          maxtempC: 23.25464480874317,
          FeelsLikeC: 18.35081967213115,
          mintempC: 12.61639344262295,
          precipMM: 2.341857923497266,
          totalSnow_cm: 0.019344262295081967,
          uvIndex: 4.797814207650274,
          DewPointC: 12.436065573770492,
          HeatIndexC: 18.91693989071038,
          WindChillC: 17.918032786885245,
          WindGustKmph: 12.753005464480875,
          cloudcover: 41.034972677595626,
          humidity: 72.26448087431694,
          pressure: 1014.7672131147541,
          visibility: 8.772677595628416,
          windspeedKmph: 8.634972677595629,
          location_id: 7
        },
        {
          maxtempF: 76.5224043715847,
          FeelsLikeF: 70.35125683060112,
          mintempF: 62.2010928961748,
          maxtempC: 24.75409836065574,
          FeelsLikeC: 21.325683060109288,
          mintempC: 16.797814207650273,
          precipMM: 3.016721311475408,
          totalSnow_cm: 0,
          uvIndex: 5.384699453551913,
          DewPointC: 15.631693989071039,
          HeatIndexC: 21.82950819672131,
          WindChillC: 20.283060109289618,
          WindGustKmph: 21.108196721311476,
          cloudcover: 38.09398907103825,
          humidity: 74.74754098360656,
          pressure: 1014.8939890710383,
          visibility: 9.450273224043716,
          windspeedKmph: 13.212021857923498,
          location_id: 8
        },
        {
          maxtempF: 88.19781420765032,
          FeelsLikeF: 82.98469945355191,
          mintempF: 69.9755191256829,
          maxtempC: 31.240437158469945,
          FeelsLikeC: 28.34426229508197,
          mintempC: 21.116939890710384,
          precipMM: 3.378688524590164,
          totalSnow_cm: 0,
          uvIndex: 6.46775956284153,
          DewPointC: 19.985792349726776,
          HeatIndexC: 28.41639344262295,
          WindChillC: 25.91256830601093,
          WindGustKmph: 11.906010928961749,
          cloudcover: 29.36393442622951,
          humidity: 72.79453551912569,
          pressure: 1014.975956284153,
          visibility: 9.303825136612021,
          windspeedKmph: 7.630601092896175,
          location_id: 9
        },
        {
          maxtempF: 84.85748633879784,
          FeelsLikeF: 78.09224043715837,
          mintempF: 66.79060109289621,
          maxtempC: 29.384699453551914,
          FeelsLikeC: 25.626229508196722,
          mintempC: 19.347540983606557,
          precipMM: 1.4209836065573773,
          totalSnow_cm: 0,
          uvIndex: 6.111475409836066,
          DewPointC: 17.049180327868854,
          HeatIndexC: 25.8,
          WindChillC: 24.277595628415302,
          WindGustKmph: 11.534426229508197,
          cloudcover: 32.82622950819672,
          humidity: 67.16174863387978,
          pressure: 1015.5049180327869,
          visibility: 9.28743169398907,
          windspeedKmph: 8.091803278688525,
          location_id: 10
        },
        {
          maxtempF: 79.03060109289646,
          FeelsLikeF: 81.08437158469926,
          mintempF: 75.49945355191274,
          maxtempC: 26.147540983606557,
          FeelsLikeC: 27.288524590163934,
          mintempC: 24.185792349726775,
          precipMM: 0.9928961748633884,
          totalSnow_cm: 0,
          uvIndex: 6.4021857923497265,
          DewPointC: 20.693989071038253,
          HeatIndexC: 27.304918032786887,
          WindChillC: 25.15081967213115,
          WindGustKmph: 27.868852459016395,
          cloudcover: 34.33224043715847,
          humidity: 76.34972677595628,
          pressure: 1014.8251366120219,
          visibility: 10.025136612021859,
          windspeedKmph: 21.091803278688523,
          location_id: 11
        },
        {
          maxtempF: 75.71191256830596,
          FeelsLikeF: 66.86535519125682,
          mintempF: 57.847650273224076,
          maxtempC: 24.303825136612023,
          FeelsLikeC: 19.389071038251366,
          mintempC: 14.379234972677596,
          precipMM: 2.7110382513661175,
          totalSnow_cm: 0.009071038251366119,
          uvIndex: 5.048087431693989,
          DewPointC: 14.180327868852459,
          HeatIndexC: 20.175956284153006,
          WindChillC: 18.60327868852459,
          WindGustKmph: 22.140983606557377,
          cloudcover: 35.86775956284153,
          humidity: 75.12677595628415,
          pressure: 1013.3846994535519,
          visibility: 9.3224043715847,
          windspeedKmph: 14.062295081967212,
          location_id: 12
        },
        {
          maxtempF: 91.08961748633877,
          FeelsLikeF: 82.9335519125679,
          mintempF: 69.25355191256854,
          maxtempC: 32.84699453551912,
          FeelsLikeC: 28.31584699453552,
          mintempC: 20.715846994535518,
          precipMM: 2.6699453551912553,
          totalSnow_cm: 0,
          uvIndex: 6.72896174863388,
          DewPointC: 18.872131147540983,
          HeatIndexC: 28.321311475409836,
          WindChillC: 26.58688524590164,
          WindGustKmph: 9.698360655737705,
          cloudcover: 24.23825136612022,
          humidity: 66.63825136612022,
          pressure: 1014.2251366120219,
          visibility: 9.762841530054645,
          windspeedKmph: 6.828415300546448,
          location_id: 13
        },
        {
          maxtempF: 74.07125683060111,
          FeelsLikeF: 64.36502732240437,
          mintempF: 53.8699453551913,
          maxtempC: 23.392349726775958,
          FeelsLikeC: 18,
          mintempC: 12.169398907103826,
          precipMM: 2.2232786885245908,
          totalSnow_cm: 0.02076502732240437,
          uvIndex: 4.79344262295082,
          DewPointC: 12.010928961748634,
          HeatIndexC: 18.575956284153005,
          WindChillC: 17.615300546448086,
          WindGustKmph: 12.970491803278689,
          cloudcover: 42.08633879781421,
          humidity: 72.0896174863388,
          pressure: 1014.7267759562842,
          visibility: 8.749726775956285,
          windspeedKmph: 8.483060109289617,
          location_id: 14
        },
        {
          maxtempF: 75.28109289617484,
          FeelsLikeF: 68.41945355191248,
          mintempF: 59.56896174863386,
          maxtempC: 24.06448087431694,
          FeelsLikeC: 20.25245901639344,
          mintempC: 15.33551912568306,
          precipMM: 0.8272131147540988,
          totalSnow_cm: 0,
          uvIndex: 5.122404371584699,
          DewPointC: 15.300546448087431,
          HeatIndexC: 20.885245901639344,
          WindChillC: 19.397814207650274,
          WindGustKmph: 18.860109289617487,
          cloudcover: 35.60327868852459,
          humidity: 76.72896174863388,
          pressure: 1014.3005464480874,
          visibility: 9.487431693989071,
          windspeedKmph: 12.232786885245902,
          location_id: 15
        },
        {
          maxtempF: 79.48502732240452,
          FeelsLikeF: 71.21486338797816,
          mintempF: 61.191912568305966,
          maxtempC: 26.4,
          FeelsLikeC: 21.805464480874317,
          mintempC: 16.237158469945356,
          precipMM: 2.559890710382514,
          totalSnow_cm: 0.0012021857923497268,
          uvIndex: 5.478688524590164,
          DewPointC: 15.428415300546447,
          HeatIndexC: 22.35081967213115,
          WindChillC: 20.70382513661202,
          WindGustKmph: 23.268852459016394,
          cloudcover: 30.5879781420765,
          humidity: 72.54535519125683,
          pressure: 1012.7180327868853,
          visibility: 9.522404371584699,
          windspeedKmph: 14.791256830601093,
          location_id: 16
        },
        {
          maxtempF: 71.46666666666673,
          FeelsLikeF: 61.18010928961739,
          mintempF: 48.57420765027325,
          maxtempC: 21.94535519125683,
          FeelsLikeC: 16.230601092896176,
          mintempC: 9.227322404371584,
          precipMM: 0.281967213114754,
          totalSnow_cm: 0,
          uvIndex: 4.594535519125683,
          DewPointC: 0.44371584699453553,
          HeatIndexC: 16.59672131147541,
          WindChillC: 16.242622950819673,
          WindGustKmph: 14.821857923497268,
          cloudcover: 8.526775956284153,
          humidity: 39.08524590163935,
          pressure: 1020.5737704918033,
          visibility: 10.043715846994536,
          windspeedKmph: 10.185792349726777,
          location_id: 17
        },
        {
          maxtempF: 87.22010928961748,
          FeelsLikeF: 82.06994535519118,
          mintempF: 69.55256830601081,
          maxtempC: 30.69726775956284,
          FeelsLikeC: 27.83606557377049,
          mintempC: 20.881967213114756,
          precipMM: 2.1318032786885253,
          totalSnow_cm: 0,
          uvIndex: 6.356284153005465,
          DewPointC: 20.510382513661202,
          HeatIndexC: 27.934426229508198,
          WindChillC: 25.23934426229508,
          WindGustKmph: 12.45464480874317,
          cloudcover: 32.868852459016395,
          humidity: 77.27322404371584,
          pressure: 1014.512568306011,
          visibility: 8.67431693989071,
          windspeedKmph: 7.688524590163935,
          location_id: 18
        },
        {
          maxtempF: 72.67846994535518,
          FeelsLikeF: 64.42601092896173,
          mintempF: 56.36043715847,
          maxtempC: 22.618579234972678,
          FeelsLikeC: 18.033879781420765,
          mintempC: 13.553005464480874,
          precipMM: 0.5746448087431696,
          totalSnow_cm: 0.0017486338797814205,
          uvIndex: 4.853551912568306,
          DewPointC: 11.68743169398907,
          HeatIndexC: 18.668852459016392,
          WindChillC: 17.619672131147542,
          WindGustKmph: 16.452459016393444,
          cloudcover: 39.47650273224044,
          humidity: 69.13224043715847,
          pressure: 1014.6907103825137,
          visibility: 9.37049180327869,
          windspeedKmph: 11.146448087431693,
          location_id: 19
        },
        {
          maxtempF: 76.72699453551917,
          FeelsLikeF: 71.9506010928962,
          mintempF: 64.46535519125676,
          maxtempC: 24.86775956284153,
          FeelsLikeC: 22.214207650273224,
          mintempC: 18.055737704918034,
          precipMM: 2.7277595628415288,
          totalSnow_cm: 0,
          uvIndex: 5.506010928961748,
          DewPointC: 15.911475409836065,
          HeatIndexC: 22.63169398907104,
          WindChillC: 21.00655737704918,
          WindGustKmph: 22.140983606557377,
          cloudcover: 34.84699453551912,
          humidity: 72.81748633879782,
          pressure: 1014.9191256830601,
          visibility: 9.696174863387979,
          windspeedKmph: 13.836065573770492,
          location_id: 20
        },
        {
          maxtempF: 79.57355191256823,
          FeelsLikeF: 73.44961748633878,
          mintempF: 64.71125683060096,
          maxtempC: 26.449180327868852,
          FeelsLikeC: 23.046994535519126,
          mintempC: 18.192349726775955,
          precipMM: 0.9202185792349731,
          totalSnow_cm: 0,
          uvIndex: 5.939890710382514,
          DewPointC: 13.67103825136612,
          HeatIndexC: 23.311475409836067,
          WindChillC: 22.434972677595628,
          WindGustKmph: 15.118032786885246,
          cloudcover: 15.448087431693988,
          humidity: 59.88743169398907,
          pressure: 1013.7781420765027,
          visibility: 9.979234972677595,
          windspeedKmph: 10.71584699453552,
          location_id: 21
        },
        {
          maxtempF: 70.37486338797815,
          FeelsLikeF: 60.94010928961755,
          mintempF: 53.29945355191261,
          maxtempC: 21.338797814207652,
          FeelsLikeC: 16.097267759562843,
          mintempC: 11.852459016393443,
          precipMM: 1.4340983606557387,
          totalSnow_cm: 0.016939890710382516,
          uvIndex: 4.518032786885246,
          DewPointC: 12.592349726775955,
          HeatIndexC: 17.18469945355191,
          WindChillC: 15.771584699453552,
          WindGustKmph: 20.9224043715847,
          cloudcover: 40.75191256830601,
          humidity: 78.88961748633879,
          pressure: 1014.2535519125684,
          visibility: 9.216393442622952,
          windspeedKmph: 13.306010928961749,
          location_id: 22
        },
        {
          maxtempF: 70.15256830601095,
          FeelsLikeF: 60.995191256830594,
          mintempF: 53.62797814207645,
          maxtempC: 21.215300546448088,
          FeelsLikeC: 16.127868852459017,
          mintempC: 12.03497267759563,
          precipMM: 2.7751912568306,
          totalSnow_cm: 0.026666666666666665,
          uvIndex: 4.524590163934426,
          DewPointC: 11.856830601092897,
          HeatIndexC: 17.18360655737705,
          WindChillC: 15.778142076502732,
          WindGustKmph: 20.797814207650273,
          cloudcover: 38.019672131147544,
          humidity: 75.4448087431694,
          pressure: 1013.2710382513661,
          visibility: 9.39344262295082,
          windspeedKmph: 13.346448087431694,
          location_id: 23
        },
        {
          maxtempF: 80.76961748633892,
          FeelsLikeF: 71.42928961748639,
          mintempF: 60.607650273224024,
          maxtempC: 27.113661202185792,
          FeelsLikeC: 21.924590163934425,
          mintempC: 15.912568306010929,
          precipMM: 0.9708196721311468,
          totalSnow_cm: 0.000546448087431694,
          uvIndex: 5.52568306010929,
          DewPointC: 15.762841530054645,
          HeatIndexC: 22.359562841530053,
          WindChillC: 20.86775956284153,
          WindGustKmph: 16.34863387978142,
          cloudcover: 33.51584699453552,
          humidity: 74.38251366120218,
          pressure: 1013.8688524590164,
          visibility: 8.878688524590164,
          windspeedKmph: 10.216393442622952,
          location_id: 24
        },
        {
          maxtempF: 85.91584699453557,
          FeelsLikeF: 83.66928961748653,
          mintempF: 73.70142076502766,
          maxtempC: 29.972677595628415,
          FeelsLikeC: 28.724590163934426,
          mintempC: 23.18688524590164,
          precipMM: 3.1456830601092887,
          totalSnow_cm: 0,
          uvIndex: 6.551912568306011,
          DewPointC: 20.5224043715847,
          HeatIndexC: 28.797814207650273,
          WindChillC: 26.17814207650273,
          WindGustKmph: 17.194535519125683,
          cloudcover: 29.656830601092896,
          humidity: 72.49508196721311,
          pressure: 1015.1540983606558,
          visibility: 9.798907103825137,
          windspeedKmph: 11.511475409836066,
          location_id: 25
        },
        {
          maxtempF: 68.14010928961754,
          FeelsLikeF: 54.17486338797809,
          mintempF: 44.000437158469886,
          maxtempC: 20.097267759562843,
          FeelsLikeC: 12.33879781420765,
          mintempC: 6.686338797814208,
          precipMM: 0.8996721311475417,
          totalSnow_cm: 0.09300546448087432,
          uvIndex: 4.017486338797815,
          DewPointC: 2.2153005464480873,
          HeatIndexC: 13.150819672131147,
          WindChillC: 12.37049180327869,
          WindGustKmph: 13.883060109289618,
          cloudcover: 24.03934426229508,
          humidity: 52.923497267759565,
          pressure: 1013.3125683060109,
          visibility: 9.780327868852458,
          windspeedKmph: 9.12896174863388,
          location_id: 26
        },
        {
          maxtempF: 82.8096174863388,
          FeelsLikeF: 76.39453551912572,
          mintempF: 65.48240437158474,
          maxtempC: 28.246994535519125,
          FeelsLikeC: 24.683060109289617,
          mintempC: 18.620765027322406,
          precipMM: 2.6632786885245876,
          totalSnow_cm: 0.0006557377049180328,
          uvIndex: 5.940983606557377,
          DewPointC: 17.42950819672131,
          HeatIndexC: 24.9224043715847,
          WindChillC: 23.175956284153006,
          WindGustKmph: 16.69071038251366,
          cloudcover: 33.6,
          humidity: 71.97158469945356,
          pressure: 1015.0754098360655,
          visibility: 9.456830601092896,
          windspeedKmph: 10.662295081967214,
          location_id: 27
        },
        {
          maxtempF: 72.22797814207654,
          FeelsLikeF: 60.49551912568303,
          mintempF: 52.357158469945375,
          maxtempC: 22.36830601092896,
          FeelsLikeC: 15.850273224043717,
          mintempC: 11.32896174863388,
          precipMM: 1.5016393442622957,
          totalSnow_cm: 0.027868852459016397,
          uvIndex: 4.665573770491803,
          DewPointC: 7.204371584699453,
          HeatIndexC: 16.86775956284153,
          WindChillC: 15.758469945355191,
          WindGustKmph: 23.39016393442623,
          cloudcover: 30.443715846994536,
          humidity: 57.7551912568306,
          pressure: 1012.327868852459,
          visibility: 9.72896174863388,
          windspeedKmph: 15.698360655737705,
          location_id: 28
        },
        {
          maxtempF: 77.83650273224049,
          FeelsLikeF: 68.38010928961752,
          mintempF: 58.996502732240494,
          maxtempC: 25.48415300546448,
          FeelsLikeC: 20.230601092896176,
          mintempC: 15.017486338797815,
          precipMM: 2.227759562841529,
          totalSnow_cm: 0.0028415300546448087,
          uvIndex: 5.2360655737704915,
          DewPointC: 13.510382513661202,
          HeatIndexC: 20.89726775956284,
          WindChillC: 19.516939890710383,
          WindGustKmph: 23.766120218579236,
          cloudcover: 32.2448087431694,
          humidity: 68.99125683060109,
          pressure: 1012.5825136612021,
          visibility: 9.582513661202185,
          windspeedKmph: 15.331147540983606,
          location_id: 29
        },
        {
          maxtempF: 68.41748633879779,
          FeelsLikeF: 58.9256830601093,
          mintempF: 53.15978142076506,
          maxtempC: 20.25136612021858,
          FeelsLikeC: 14.978142076502733,
          mintempC: 11.774863387978142,
          precipMM: 2.1468852459016374,
          totalSnow_cm: 0.0006557377049180328,
          uvIndex: 4.269945355191257,
          DewPointC: 11.401092896174863,
          HeatIndexC: 15.79672131147541,
          WindChillC: 14.825136612021858,
          WindGustKmph: 19.332240437158468,
          cloudcover: 37.23060109289617,
          humidity: 78.18469945355191,
          pressure: 1016.5967213114754,
          visibility: 9.079781420765027,
          windspeedKmph: 11.71584699453552,
          location_id: 30
        },
        {
          maxtempF: 76.89814207650278,
          FeelsLikeF: 69.8476502732241,
          mintempF: 60.26142076502731,
          maxtempC: 24.962841530054646,
          FeelsLikeC: 21.04590163934426,
          mintempC: 15.720218579234972,
          precipMM: 2.190382513661202,
          totalSnow_cm: 0.0003278688524590164,
          uvIndex: 5.300546448087432,
          DewPointC: 14.598907103825137,
          HeatIndexC: 21.582513661202185,
          WindChillC: 20.154098360655738,
          WindGustKmph: 17.526775956284155,
          cloudcover: 39.76939890710383,
          humidity: 71.34535519125683,
          pressure: 1014.8666666666667,
          visibility: 9.46448087431694,
          windspeedKmph: 11.558469945355192,
          location_id: 31
        },
        {
          maxtempF: 76.89420765027327,
          FeelsLikeF: 65.1106010928962,
          mintempF: 54.56437158469939,
          maxtempC: 24.96065573770492,
          FeelsLikeC: 18.414207650273223,
          mintempC: 12.555191256830602,
          precipMM: 0.5854644808743169,
          totalSnow_cm: 0.006775956284153005,
          uvIndex: 5.19672131147541,
          DewPointC: 2.106010928961749,
          HeatIndexC: 18.778142076502732,
          WindChillC: 18.483060109289617,
          WindGustKmph: 18.481967213114753,
          cloudcover: 13.639344262295081,
          humidity: 37.35300546448087,
          pressure: 1013.3431693989071,
          visibility: 10.033879781420765,
          windspeedKmph: 12.583606557377049,
          location_id: 32
        },
        {
          maxtempF: 66.03715846994538,
          FeelsLikeF: 53.74797814207647,
          mintempF: 43.72896174863384,
          maxtempC: 18.92896174863388,
          FeelsLikeC: 12.101639344262296,
          mintempC: 6.53551912568306,
          precipMM: 0.5430601092896177,
          totalSnow_cm: 0.01628415300546448,
          uvIndex: 4.112568306010929,
          DewPointC: 0.1726775956284153,
          HeatIndexC: 12.852459016393443,
          WindChillC: 12.068852459016393,
          WindGustKmph: 15.660109289617486,
          cloudcover: 14.434972677595628,
          humidity: 47.716939890710385,
          pressure: 1012.8251366120219,
          visibility: 9.975956284153005,
          windspeedKmph: 9.27431693989071,
          location_id: 33
        },
        {
          maxtempF: 71.25814207650275,
          FeelsLikeF: 60.76109289617488,
          mintempF: 50.696830601092906,
          maxtempC: 21.82950819672131,
          FeelsLikeC: 15.997814207650274,
          mintempC: 10.40655737704918,
          precipMM: 2.7192349726775946,
          totalSnow_cm: 0.0073224043715847,
          uvIndex: 4.500546448087432,
          DewPointC: 11.410928961748635,
          HeatIndexC: 16.707103825136613,
          WindChillC: 15.769398907103826,
          WindGustKmph: 12.885245901639344,
          cloudcover: 42.334426229508196,
          humidity: 76.21420765027322,
          pressure: 1014.6491803278689,
          visibility: 8.58688524590164,
          windspeedKmph: 8.347540983606557,
          location_id: 34
        },
        {
          maxtempF: 75.8948633879782,
          FeelsLikeF: 67.70928961748635,
          mintempF: 58.3906010928962,
          maxtempC: 24.40546448087432,
          FeelsLikeC: 19.85792349726776,
          mintempC: 14.68087431693989,
          precipMM: 2.084699453551913,
          totalSnow_cm: 0.0030601092896174868,
          uvIndex: 5.104918032786885,
          DewPointC: 14.920218579234973,
          HeatIndexC: 20.407650273224043,
          WindChillC: 19.1224043715847,
          WindGustKmph: 16.319125683060108,
          cloudcover: 36.31366120218579,
          humidity: 76.70819672131148,
          pressure: 1014.6153005464481,
          visibility: 9.273224043715848,
          windspeedKmph: 10.31912568306011,
          location_id: 35
        },
        {
          maxtempF: 84.24765027322402,
          FeelsLikeF: 76.56961748633871,
          mintempF: 65.75781420765031,
          maxtempC: 29.04590163934426,
          FeelsLikeC: 24.78032786885246,
          mintempC: 18.77377049180328,
          precipMM: 3.0084153005464453,
          totalSnow_cm: 0.0006557377049180328,
          uvIndex: 6,
          DewPointC: 16.547540983606556,
          HeatIndexC: 25.121311475409836,
          WindChillC: 23.41639344262295,
          WindGustKmph: 25.41967213114754,
          cloudcover: 28.042622950819673,
          humidity: 67.351912568306,
          pressure: 1012.3300546448088,
          visibility: 9.68743169398907,
          windspeedKmph: 16.346448087431693,
          location_id: 36
        },
        {
          maxtempF: 96.08437158469938,
          FeelsLikeF: 92.10076502732247,
          mintempF: 78.99912568306024,
          maxtempC: 35.62185792349727,
          FeelsLikeC: 33.40874316939891,
          mintempC: 26.130054644808745,
          precipMM: 2.1464480874316956,
          totalSnow_cm: 0,
          uvIndex: 7.4557377049180324,
          DewPointC: 19.98469945355191,
          HeatIndexC: 33.4120218579235,
          WindChillC: 30.904918032786885,
          WindGustKmph: 14.281967213114754,
          cloudcover: 30.332240437158468,
          humidity: 55.008743169398905,
          pressure: 1007.3672131147541,
          visibility: 9.94535519125683,
          windspeedKmph: 11.052459016393442,
          location_id: 37
        },
        {
          maxtempF: 74.38207650273216,
          FeelsLikeF: 65.94863387978134,
          mintempF: 56.50207650273215,
          maxtempC: 23.565027322404372,
          FeelsLikeC: 18.879781420765028,
          mintempC: 13.631693989071039,
          precipMM: 2.9639344262295078,
          totalSnow_cm: 0.002185792349726776,
          uvIndex: 4.966120218579235,
          DewPointC: 14.212021857923498,
          HeatIndexC: 19.523497267759563,
          WindChillC: 18.288524590163934,
          WindGustKmph: 15.561748633879782,
          cloudcover: 39.5344262295082,
          humidity: 77.09836065573771,
          pressure: 1015.1289617486339,
          visibility: 9.098360655737705,
          windspeedKmph: 9.814207650273223,
          location_id: 38
        },
        {
          maxtempF: 70.81748633879783,
          FeelsLikeF: 63.552568306010954,
          mintempF: 56.63191256830608,
          maxtempC: 21.584699453551913,
          FeelsLikeC: 17.54863387978142,
          mintempC: 13.703825136612021,
          precipMM: 1.4380327868852474,
          totalSnow_cm: 0.007868852459016393,
          uvIndex: 4.795628415300547,
          DewPointC: 12.801092896174863,
          HeatIndexC: 18.389071038251366,
          WindChillC: 17.10273224043716,
          WindGustKmph: 20.82622950819672,
          cloudcover: 38.41967213114754,
          humidity: 74.86775956284153,
          pressure: 1014.8196721311475,
          visibility: 9.401092896174863,
          windspeedKmph: 13.518032786885247,
          location_id: 39
        },
        {
          maxtempF: 86.26010928961756,
          FeelsLikeF: 79.57945355191248,
          mintempF: 68.63781420765024,
          maxtempC: 30.16393442622951,
          FeelsLikeC: 26.452459016393444,
          mintempC: 20.373770491803278,
          precipMM: 2.1417486338797804,
          totalSnow_cm: 0,
          uvIndex: 6.333333333333333,
          DewPointC: 17.54863387978142,
          HeatIndexC: 26.59453551912568,
          WindChillC: 24.852459016393443,
          WindGustKmph: 16.843715846994535,
          cloudcover: 31.66448087431694,
          humidity: 66.44699453551912,
          pressure: 1015.120218579235,
          visibility: 9.70273224043716,
          windspeedKmph: 10.982513661202185,
          location_id: 40
        },
        {
          maxtempF: 70.72502732240444,
          FeelsLikeF: 62.93879781420762,
          mintempF: 54.62732240437159,
          maxtempC: 21.533333333333335,
          FeelsLikeC: 17.207650273224044,
          mintempC: 12.59016393442623,
          precipMM: 1.0046994535519136,
          totalSnow_cm: 0,
          uvIndex: 4.577049180327869,
          DewPointC: 11.256830601092895,
          HeatIndexC: 17.881967213114756,
          WindChillC: 17.072131147540983,
          WindGustKmph: 16.49071038251366,
          cloudcover: 40.15081967213115,
          humidity: 69.21639344262294,
          pressure: 1015.9781420765028,
          visibility: 9.633879781420765,
          windspeedKmph: 11.620765027322404,
          location_id: 41
        },
        {
          maxtempF: 81.73748633879785,
          FeelsLikeF: 74.81092896174867,
          mintempF: 63.81814207650266,
          maxtempC: 27.65136612021858,
          FeelsLikeC: 23.80327868852459,
          mintempC: 17.696174863387977,
          precipMM: 3.1320218579234953,
          totalSnow_cm: 0.0001092896174863388,
          uvIndex: 5.686338797814208,
          DewPointC: 17.174863387978142,
          HeatIndexC: 24.06775956284153,
          WindChillC: 22.384699453551914,
          WindGustKmph: 13.07103825136612,
          cloudcover: 34.76393442622951,
          humidity: 74.12131147540984,
          pressure: 1015.0316939890711,
          visibility: 8.970491803278689,
          windspeedKmph: 8.26775956284153,
          location_id: 42
        },
        {
          maxtempF: 87.99322404371588,
          FeelsLikeF: 82.14273224043711,
          mintempF: 70.14469945355191,
          maxtempC: 31.126775956284153,
          FeelsLikeC: 27.876502732240436,
          mintempC: 21.210928961748635,
          precipMM: 2.047650273224045,
          totalSnow_cm: 0,
          uvIndex: 6.336612021857923,
          DewPointC: 19.455737704918032,
          HeatIndexC: 28.02841530054645,
          WindChillC: 25.78688524590164,
          WindGustKmph: 20.097267759562843,
          cloudcover: 37.59234972677596,
          humidity: 71.23825136612022,
          pressure: 1013.0218579234972,
          visibility: 9.224043715846994,
          windspeedKmph: 13.333333333333334,
          location_id: 43
        },
        {
          maxtempF: 70.83125683060115,
          FeelsLikeF: 59.9879781420765,
          mintempF: 50.232568306010855,
          maxtempC: 21.592349726775957,
          FeelsLikeC: 15.568306010928962,
          mintempC: 10.148633879781421,
          precipMM: 1.2554098360655743,
          totalSnow_cm: 0.03049180327868853,
          uvIndex: 4.527868852459016,
          DewPointC: 2.614207650273224,
          HeatIndexC: 16.024043715846993,
          WindChillC: 15.625136612021858,
          WindGustKmph: 14.283060109289618,
          cloudcover: 17.59672131147541,
          humidity: 44.91912568306011,
          pressure: 1011.9213114754099,
          visibility: 9.944262295081968,
          windspeedKmph: 8.99672131147541,
          location_id: 44
        },
        {
          maxtempF: 82.53027322404371,
          FeelsLikeF: 74.2286338797814,
          mintempF: 63.2948633879781,
          maxtempC: 28.091803278688523,
          FeelsLikeC: 23.47978142076503,
          mintempC: 17.40546448087432,
          precipMM: 1.6274316939890716,
          totalSnow_cm: 0,
          uvIndex: 5.766120218579235,
          DewPointC: 16.072131147540983,
          HeatIndexC: 23.72568306010929,
          WindChillC: 22.345355191256832,
          WindGustKmph: 13.821857923497268,
          cloudcover: 38.87868852459017,
          humidity: 70.60983606557377,
          pressure: 1015.0852459016394,
          visibility: 9.12568306010929,
          windspeedKmph: 8.93551912568306,
          location_id: 45
        },
        {
          maxtempF: 67.07978142076502,
          FeelsLikeF: 56.22666666666672,
          mintempF: 46.98469945355193,
          maxtempC: 19.508196721311474,
          FeelsLikeC: 13.478688524590163,
          mintempC: 8.344262295081966,
          precipMM: 2.4190163934426234,
          totalSnow_cm: 0.06688524590163933,
          uvIndex: 4.016393442622951,
          DewPointC: 9.379234972677596,
          HeatIndexC: 14.32896174863388,
          WindChillC: 13.395628415300546,
          WindGustKmph: 12.449180327868852,
          cloudcover: 46.30054644808743,
          humidity: 77.46448087431693,
          pressure: 1014.1562841530055,
          visibility: 7.899453551912568,
          windspeedKmph: 8.230601092896174,
          location_id: 46
        },
        {
          maxtempF: 70.55387978142076,
          FeelsLikeF: 58.69158469945357,
          mintempF: 47.00437158469947,
          maxtempC: 21.43825136612022,
          FeelsLikeC: 14.848087431693989,
          mintempC: 8.3551912568306,
          precipMM: 1.1692896174863394,
          totalSnow_cm: 0,
          uvIndex: 4.161748633879782,
          DewPointC: 9.892896174863388,
          HeatIndexC: 15.306010928961749,
          WindChillC: 14.810928961748633,
          WindGustKmph: 9.884153005464482,
          cloudcover: 49.03606557377049,
          humidity: 75.86994535519126,
          pressure: 1016.1464480874317,
          visibility: 7.693989071038251,
          windspeedKmph: 6.641530054644809,
          location_id: 47
        },
        {
          maxtempF: 70.30994535519136,
          FeelsLikeF: 60.959781420765026,
          mintempF: 53.45289617486348,
          maxtempC: 21.30273224043716,
          FeelsLikeC: 16.108196721311476,
          mintempC: 11.937704918032788,
          precipMM: 1.763060109289618,
          totalSnow_cm: 0.020765027322404372,
          uvIndex: 4.506010928961748,
          DewPointC: 12.723497267759562,
          HeatIndexC: 17.19344262295082,
          WindChillC: 15.749726775956285,
          WindGustKmph: 21.394535519125682,
          cloudcover: 39.840437158469946,
          humidity: 79.5792349726776,
          pressure: 1013.9300546448087,
          visibility: 9.233879781420764,
          windspeedKmph: 13.634972677595629,
          location_id: 48
        },
        {
          maxtempF: 81.5801092896173,
          FeelsLikeF: 81.85158469945344,
          mintempF: 73.72109289617501,
          maxtempC: 27.56393442622951,
          FeelsLikeC: 27.714754098360658,
          mintempC: 23.197814207650275,
          precipMM: 4.648524590163935,
          totalSnow_cm: 0,
          uvIndex: 6.3202185792349725,
          DewPointC: 20.29617486338798,
          HeatIndexC: 27.859016393442623,
          WindChillC: 25.236065573770492,
          WindGustKmph: 23.763934426229508,
          cloudcover: 27.446994535519124,
          humidity: 74.351912568306,
          pressure: 1015.1573770491804,
          visibility: 9.779234972677596,
          windspeedKmph: 15.846994535519126,
          location_id: 49
        },
        {
          maxtempF: 71.39191256830598,
          FeelsLikeF: 58.66601092896178,
          mintempF: 50.7617486338798,
          maxtempC: 21.90382513661202,
          FeelsLikeC: 14.833879781420766,
          mintempC: 10.442622950819672,
          precipMM: 1.669180327868852,
          totalSnow_cm: 0.13868852459016395,
          uvIndex: 4.559562841530055,
          DewPointC: 3.540983606557377,
          HeatIndexC: 15.896174863387978,
          WindChillC: 14.897267759562842,
          WindGustKmph: 24.424043715846995,
          cloudcover: 25.481967213114753,
          humidity: 49.53005464480874,
          pressure: 1012.4535519125683,
          visibility: 9.701639344262295,
          windspeedKmph: 16.250273224043717,
          location_id: 50
        }
      ]);
    });
};