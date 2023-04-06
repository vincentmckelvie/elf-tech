import*as THREE from"../build/three.module.js";const splineWhite2=new THREE.CatmullRomCurve3([new THREE.Vector3(1.5991318225860596,2.1491565704345703,-.024320323020219803),new THREE.Vector3(1.5959360599517822,2.145040273666382,-.024636361747980118),new THREE.Vector3(1.5925579071044922,2.140129327774048,-.025312049314379692),new THREE.Vector3(1.5889935493469238,2.134455919265747,-.02633814699947834),new THREE.Vector3(1.5852389335632324,2.1280527114868164,-.027705419808626175),new THREE.Vector3(1.581290364265442,2.1209521293640137,-.02940463088452816),new THREE.Vector3(1.5771437883377075,2.1131865978240967,-.03142654150724411),new THREE.Vector3(1.5727953910827637,2.1047885417938232,-.03376191854476929),new THREE.Vector3(1.5682412385940552,2.095790386199951,-.036401525139808655),new THREE.Vector3(1.5634775161743164,2.0862245559692383,-.03933612257242203),new THREE.Vector3(1.5585002899169922,2.0761237144470215,-.04255647584795952),new THREE.Vector3(1.5533056259155273,2.0655202865600586,-.04605334624648094),new THREE.Vector3(1.5478895902633667,2.0544464588165283,-.04981749877333641),new THREE.Vector3(1.5422483682632446,2.0429348945617676,-.05383969843387604),new THREE.Vector3(1.536378026008606,2.031018018722534,-.05811070650815964),new THREE.Vector3(1.530274748802185,2.018728494644165,-.06262128800153732),new THREE.Vector3(1.5239346027374268,2.006098508834839,-.06736220419406891),new THREE.Vector3(1.5173536539077759,1.993160605430603,-.07232421636581421),new THREE.Vector3(1.5105279684066772,1.9799472093582153,-.07749809324741364),new THREE.Vector3(1.5034537315368652,1.9664908647537231,-.082874596118927),new THREE.Vector3(1.4961270093917847,1.9528238773345947,-.08844448626041412),new THREE.Vector3(1.4885438680648804,1.9389787912368774,-.09419853240251541),new THREE.Vector3(1.4807004928588867,1.9249881505966187,-.10012748837471008),new THREE.Vector3(1.4725929498672485,1.9108842611312866,-.10622213035821915),new THREE.Vector3(1.4642174243927002,1.8966996669769287,-.11247321218252182),new THREE.Vector3(1.4555699825286865,1.8824667930603027,-.11887150257825851),new THREE.Vector3(1.4466466903686523,1.868218183517456,-.12540775537490845),new THREE.Vector3(1.4374436140060425,1.8539862632751465,-.13207274675369263),new THREE.Vector3(1.4279569387435913,1.8398033380508423,-.13885723054409027),new THREE.Vector3(1.4181827306747437,1.8257020711898804,-.1457519829273224),new THREE.Vector3(1.4081170558929443,1.811714768409729,-.1527477502822876),new THREE.Vector3(1.3977560997009277,1.7978739738464355,-.1598353087902069),new THREE.Vector3(1.3870959281921387,1.7842121124267578,-.16700541973114014),new THREE.Vector3(1.3761327266693115,1.7707616090774536,-.1742488443851471),new THREE.Vector3(1.3648624420166016,1.7575550079345703,-.1815563440322876),new THREE.Vector3(1.3532812595367432,1.7446247339248657,-.18891867995262146),new THREE.Vector3(1.3413853645324707,1.7320032119750977,-.1963266134262085),new THREE.Vector3(1.3291707038879395,1.719722867012024,-.20377092063426971),new THREE.Vector3(1.3166334629058838,1.707816243171692,-.21124236285686493),new THREE.Vector3(1.303769826889038,1.6963157653808594,-.21873170137405396),new THREE.Vector3(1.2905758619308472,1.6852538585662842,-.2262296974658966),new THREE.Vector3(1.2770476341247559,1.6746630668640137,-.2337271124124527),new THREE.Vector3(1.263181209564209,1.6645756959915161,-.24121470749378204),new THREE.Vector3(1.248972773551941,1.6550242900848389,-.24868324398994446),new THREE.Vector3(1.2344183921813965,1.6460413932800293,-.25612348318099976),new THREE.Vector3(1.2195141315460205,1.6376593112945557,-.26352620124816895),new THREE.Vector3(1.2042561769485474,1.6299105882644653,-.27088215947151184),new THREE.Vector3(1.1886405944824219,1.6228276491165161,-.27818211913108826),new THREE.Vector3(1.1726634502410889,1.6164430379867554,-.285416841506958),new THREE.Vector3(1.1563209295272827,1.6107890605926514,-.2925770878791809),new THREE.Vector3(1.1396090984344482,1.6058982610702515,-.29965364933013916),new THREE.Vector3(1.1225240230560303,1.601803183555603,-.3066372573375702),new THREE.Vector3(1.1050618886947632,1.5985361337661743,-.3135186731815338),new THREE.Vector3(1.0872186422348022,1.5961296558380127,-.32028868794441223),new THREE.Vector3(1.0689905881881714,1.594616174697876,-.32693803310394287),new THREE.Vector3(1.0503736734390259,1.594028115272522,-.33345749974250793),new THREE.Vector3(1.0313640832901,1.594398021697998,-.33983781933784485),new THREE.Vector3(1.0119580030441284,1.595758318901062,-.3460697829723358),new THREE.Vector3(.9921513795852661,1.5981414318084717,-.35214415192604065),new THREE.Vector3(.9719403982162476,1.6015797853469849,-.35805168747901917),new THREE.Vector3(.9513211846351624,1.606105923652649,-.3637831211090088),new THREE.Vector3(.9302898049354553,1.6117522716522217,-.3693292438983917),new THREE.Vector3(.9088423848152161,1.618551254272461,-.3746808171272278),new THREE.Vector3(.8869749903678894,1.6265352964401245,-.37982863187789917),new THREE.Vector3(.864683210849762,1.635737419128418,-.384763240814209),new THREE.Vector3(.8424800038337708,1.6451489925384521,-.389340341091156),new THREE.Vector3(.8208716511726379,1.6537529230117798,-.39342886209487915),new THREE.Vector3(.7998467683792114,1.6615670919418335,-.3970402181148529),new THREE.Vector3(.7793940901756287,1.668609380722046,-.400185763835907),new THREE.Vector3(.7595022320747375,1.6748976707458496,-.40287691354751587),new THREE.Vector3(.7401599287986755,1.6804498434066772,-.4051250219345093),new THREE.Vector3(.7213557958602905,1.6852836608886719,-.4069415032863617),new THREE.Vector3(.7030785083770752,1.6894170045852661,-.4083377420902252),new THREE.Vector3(.6853167414665222,1.6928677558898926,-.40932509303092957),new THREE.Vector3(.6680591702461243,1.6956536769866943,-.4099149703979492),new THREE.Vector3(.651294469833374,1.6977927684783936,-.4101187586784363),new THREE.Vector3(.6350113153457642,1.6993027925491333,-.40994784235954285),new THREE.Vector3(.6191983819007874,1.7002016305923462,-.409413605928421),new THREE.Vector3(.6038443446159363,1.7005070447921753,-.4085274338722229),new THREE.Vector3(.5889378190040588,1.7002370357513428,-.4073007106781006),new THREE.Vector3(.5744675397872925,1.6994093656539917,-.4057448208332062),new THREE.Vector3(.5604221224784851,1.6980419158935547,-.4038711488246918),new THREE.Vector3(.5467903017997742,1.6961525678634644,-.4016910791397095),new THREE.Vector3(.5335606932640076,1.6937590837478638,-.3992159962654114),new THREE.Vector3(.520721971988678,1.6908793449401855,-.3964572846889496),new THREE.Vector3(.5082628130912781,1.6875312328338623,-.3934263586997986),new THREE.Vector3(.49617189168930054,1.6837326288223267,-.3901345729827881),new THREE.Vector3(.48443788290023804,1.6795012950897217,-.3865933120250702),new THREE.Vector3(.47304946184158325,1.6748552322387695,-.3828139901161194),new THREE.Vector3(.46199530363082886,1.6698122024536133,-.3788079619407654),new THREE.Vector3(.45126405358314514,1.664389967918396,-.37458664178848267),new THREE.Vector3(.4408443868160248,1.6586065292358398,-.37016138434410095),new THREE.Vector3(.43072497844696045,1.652479648590088,-.3655436038970947),new THREE.Vector3(.4208945035934448,1.6460272073745728,-.3607446849346161),new THREE.Vector3(.4113416373729706,1.639267086982727,-.35577598214149475),new THREE.Vector3(.402055025100708,1.6322170495986938,-.3506489098072052),new THREE.Vector3(.39302337169647217,1.6248950958251953,-.34537485241889954),new THREE.Vector3(.38423532247543335,1.6173189878463745,-.33996519446372986),new THREE.Vector3(.37567955255508423,1.609506607055664,-.33443132042884827),new THREE.Vector3(.3673447370529175,1.601475715637207,-.32878461480140686),new THREE.Vector3(.3592195212841034,1.5932443141937256,-.32303646206855774),new THREE.Vector3(.35129261016845703,1.5848301649093628,-.317198246717453),new THREE.Vector3(.3435526490211487,1.5762511491775513,-.31128135323524475),new THREE.Vector3(.3359883427619934,1.567525029182434,-.3052971661090851),new THREE.Vector3(.3285883367061615,1.5586698055267334,-.2992570698261261),new THREE.Vector3(.32134127616882324,1.5497032403945923,-.2931724488735199),new THREE.Vector3(.3142358660697937,1.5406432151794434,-.28705471754074097),new THREE.Vector3(.30726078152656555,1.5315076112747192,-.280915230512619),new THREE.Vector3(.3004046678543091,1.522314190864563,-.27476537227630615),new THREE.Vector3(.29365620017051697,1.5130808353424072,-.26861655712127686),new THREE.Vector3(.2870040535926819,1.5038254261016846,-.26248013973236084),new THREE.Vector3(.2804369032382965,1.4945658445358276,-.2563675343990326),new THREE.Vector3(.2739434242248535,1.4853198528289795,-.2502900958061218),new THREE.Vector3(.2675122618675232,1.4761054515838623,-.24425923824310303),new THREE.Vector3(.2611321210861206,1.4669404029846191,-.2382863312959671),new THREE.Vector3(.25479164719581604,1.4578425884246826,-.23238277435302734),new THREE.Vector3(.24847950041294098,1.4488297700881958,-.22655993700027466),new THREE.Vector3(.2421843707561493,1.4399198293685913,-.22082921862602234),new THREE.Vector3(.23589491844177246,1.4311306476593018,-.21520200371742249),new THREE.Vector3(.22959981858730316,1.4224801063537598,-.209689661860466),new THREE.Vector3(.22328774631023407,1.413986086845398,-.2043035924434662),new THREE.Vector3(.21694736182689667,1.4056663513183594,-.19905517995357513),new THREE.Vector3(.21056734025478363,1.3975387811660767,-.19395582377910614),new THREE.Vector3(.20413635671138763,1.3896212577819824,-.1890168935060501),new THREE.Vector3(.19764307141304016,1.3819316625595093,-.18424977362155914),new THREE.Vector3(.1910761594772339,1.3744877576828003,-.17966584861278534),new THREE.Vector3(.1844242960214615,1.367307424545288,-.175276517868042),new THREE.Vector3(.17767614126205444,1.3604085445404053,-.1710931658744812),new THREE.Vector3(.17082031071186066,1.3538095951080322,-.167127326130867)]);export{splineWhite2};