function minimumAbsDifference(arr: number[]): number[][] {
  let minDistance: number = Infinity;
  outer:
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let comparison1 = arr[j] - arr[i];
      let comparison2 = arr[i] - arr[j];
      if (minDistance === 1) {
        break outer;
      }
      if (comparison1 >= 0) {
        minDistance = Math.min(minDistance, arr[j] - arr[i]);
      }
      if (comparison2 >= 0) {
        minDistance = Math.min(minDistance, arr[i] - arr[j]);
      }
    }
  }
  console.log("minDistance", minDistance);

  let mins: number[] = [];
  while (arr.length > 0) {
    // for (let i = 0; i < 4; i++) {
    let minTuple = arr.reduce((acc, cur, idx) => {
      let min = Math.min(acc[0], cur);
      min !== acc[0] ? acc[1] = idx : ""
      acc[0] = min;
      return acc;
    }, [Infinity, -1])
    mins.push(minTuple[0]);
    arr.splice(minTuple[1], 1);
  }
  let output: number[][] = [];

  for (let i = 0; i < mins.length - 1; i++) {
    if (mins[i + 1] - mins[i] === minDistance) {
      output.push([mins[i], mins[i + 1]]);
    }
  }
  return output;
};


console.log(minimumAbsDifference([-751056, 178274, -735632, 702299, -884544, -82499, 46618, 109675, 572324, -327021, -115207, -766589, 746624, 348279, -965672, 203149, -370414, 255533, -876212, 64912, 772766, 10688, 826331, -293891, 675559, -426315, 128895, -794530, 578777, 624230, 165516, 218374, -297935, -855756, 827168, -417088, 410988, -734489, -349466, -757792, -152905, -532075, 251409, -245012, -756346, 175532, 514381, -916698, 109036, 522054, -262232, -629879, -602853, 126356, 76411, -800642, -514688, 143195, -998511, -826648, 701463, -245122, -948956, -142111, -66191, 975460, 16058, 147790, -810669, -535853, 403867, 232145, 942554, 352790, 66996, -962553, -822093, -925658, -423141, -397234, -883978, -507173, -455576, -618827, -426764, 542235, -547655, -556274, -998696, 673291, -704460, -87723, 527104, -251766, 264997, 465981, -923166, -102265, -409524, 316245, -285974, 722573, 77165, 638328, -951042, -969107, 284631, -192986, -387035, 330748, 897974, 517669, 66162, -577750, 558050, -729922, 46728, -308486, 941645, -77327, -747218, -240416, -803885, -610582, -200129, -952615, 20014, 565523, 199075, -657199, 132577, -870976, -925848, -364636, 600767, 935204, 903454, 995891, 990182, 394274, -167056, 414131, 554822, -653203, 55448, 386183, 946964, 151185, -234637, -273858, 738756, -623612, 360884, -311971, 673918, -527761, -999065, -305093, -952310, 455880, -757225, -296182, -417053, -213384, -58916, -910687, 586112, -680905, 754467, 809660, -519800, 341863, 620699, 880804, 809863, 636030, -603281, 512995, -568789, 336262, -829794, 932711, -496254, 986407, -817869, 115233, 953418, 290022, 307707, 79989, 450793, -943955, 527679, -490896, 115445, 879807, 674581, 212317, -429624, 600791, -558644, -249343, 728959, 719938, 953854, -989030, 958596, -10690, -786558, 139811, 891015, -849773, 400787, 576551, 314054, 562910, -70505, 319176, -968823, -883098, -185287, 901063, -915541, 504940, -354326, -50215, 866480, 620161, -278798, -152290, -538670, -942775, -872174, -560792, 335865, -326056, 519047, 706486, 62308, 265896, 749794, -680790, 197698, -517179, -877400, -549588, 4706, -940417, 515003, -765013, -275749, -732505, 219903, 565570, 904320, -423039, -892184, -841552, -755545, -635963, -630818, 297146, -839293, 677904, 897993, -686429, -966206, 833268, -816899, 261934, -196827, -709604, -444973, -62305, 92050, -990289, 983437, 420215, -601435, -324793, 911402, 202773, -218904, -667353, -841143, 795224, 787933, -828418, -280581, 173825, 86933, 158485, 390372, 876499, -977837, 596578, 710541, 370344, 962423, -785627, 689601, -869225, -176057, 419865, 700085, -924439, 436466, 368241, -177328, 406367, -377507, -632579, -681837, -267909, 581947, -654215, 102964, -187892, 534987, 549061, 101342, -802802, 429658, 855009, -99641, -812476, 950975, -832106, 637338, 533693, 31473, 861382, 856383, -530091, 743410, -872768, 681960, 579783, 793698, 480870, 115276, -695649, -668765, -933647, 634421, -417842, 293538, -120681, -213672, 132896, -568165, 189729, 980301, -485064, -933544, 779561, -777505, 324580, -545257, -236552, 711689, -347785, 321589, -912358, -789267, 202788, -427471, 976132, 465152, -98938, 869318, -592142, 387333, 752326, 599847, 109189, 399740, -523296, 39098, -9442, -446996, 870608, -454567, -480981, -485432, 756407, -33996, -819183, 741605, -761156, -177760, 442500, 697842, 711291, -673514, -639933, -644492, -629638, -681583, 730271, -396406, 348580, 479057, 980303, -617746, 589339, 644666, -431842, -642708, -542555, 22579, 993685, 171144, -117012, 912152, 467055, 244684, 116491, -60585, -860291, 43700, -525824, -899482, -37697, -351035, -966452, -511418, 679929, 774535, -70832, -968319, 39317, -294209, -837639, 119759, 231712, 602142, 996372, 769273, -368398, 266915, 688981, -138592, -714895, -235746, -320883, -567768, -865600, -271288, 416757, 123187, -679981, -948368, -988337, -454923, -438891, -315513, 328522, -798693, -600736, 305023, 491066, 438687, 11746, -260097, 322137, 480715, 546000, 817115, -17513, -689127, 894153, 440952, 462951, 293515, 859660, 102328, -547587, -522636, 794962, 135775, 583829, 322828, 495814, 428853, 537532, 421441, -213473, 71662, -473922, -959784, 36542, 610021, -9267, -515657, 213604, -773215, -757806, -102293, -797860, 722592, -106709, 717759, 365938, 161239, -880717, 59666, 388041, 189099, 749155, 351471, 501141, -955835, 536845, -861708, -777962, -20099, 868030, 287619, 151075, -818040, -479788, -220361, 125976, 212877, 875477, 464708, -530262, 892998, 144971, 674218, 163839, 218602, 773466, 892699, 774808, 716534, 924641, 252888, -825927, 350451, -274110, 103986, 470866, -661069, -378619, -845899, -651178, 379645, 71928, -372759, 651828, 159237, 859688, 567160, -673190, -565280, -943690, 363272, -285645, 162463, -604204, -462621, -483442, 13786, 200702, 819259, 94528, 595194, 93148, -274005, -466471, -274829, -477880, -821826, -447324, -473865, -842050, -613013, -839198, 825904, 696563, 241577, 51294, 20636, 81924, -369078, 483090, 216494, -824606, -990982, 647340, -889316, -965454, -582404, 215362, 294658, -327888, 737653, -729900, 221654, -897409, 204313, -937247, 32396, -427178, -581460, 839976, 270277, -600643, 717514, -392734, 213323, -706032, -779101, -910078, -586671, 599950, 615730, -429080, 80871, -271349, 374592, 652132, -163650, -455073, 451823, 261366, -196816, -70198, 35595, 932900, -273997, 337928, 178774, -249374, -62503, -497761, -58285, 963818, -16286, -588155, -362763, 369758, 237691, 380676, -171715, 787327, 583679, 525970, 632026, -636854, -182721, -260453, 204574, 114689, 541975, -46955, -662452, -594089, -783170, 656321, -935086, 911127, -993066, 661158, -742134, 987093, 941918, 828153, -471873, 881572, -648376, -606582, -757385, 267625, 897846, -250748, 886562, 329748, 443142, -545774, 737960, 325301, -671160, -133616, -899638, 386770, -6060, 478401, -506056, -29219, 264309, 200518, -560424, -712850, 836991, -66174, 930588, 826727, 327517, -156816, -975323, 557220, 992437, 210223, 8664, 686367, 529290, 368031, 419128, 882565, -407169, 377852, 719836, 440909, 4709, 781840, 984300, -198770, 18597, 777781, -585349, 45063, 736913, 102412, 258815, -993125, 884721, 161502, 146223, -293050, -825224, 811122, 599056, 824939, 929127, -129453, 320956, -899028, -771710, -420674, 898502, 514991, 438979, 231700, -268500, 98849, -19144, 999637, 707826, 441055, -719815, 349419, 778259, 51945, 222586, 564253, 880577, -726108, -937515, 610856, 134478, -438385, -915678, 260691, -185818, -768098, 531975, -924041, -873226, 942860, 25910, 107733, -467973, 725183, -256709, 879368, -246202, -339355, 151349]));
