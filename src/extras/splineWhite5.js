import * as THREE from '../build/three.module.js';const splineWhite5 = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.4184235632419586, -0.18545424938201904, 0.25966304540634155),new THREE.Vector3(-0.4193360209465027, -0.17349779605865479, 0.2592262923717499),new THREE.Vector3(-0.41991177201271057, -0.16123901307582855, 0.25857308506965637),new THREE.Vector3(-0.42016535997390747, -0.14868876338005066, 0.25771039724349976),new THREE.Vector3(-0.4201113283634186, -0.13585790991783142, 0.25664517283439636),new THREE.Vector3(-0.4197642207145691, -0.12275733798742294, 0.2553844153881073),new THREE.Vector3(-0.4191385507583618, -0.10939791798591614, 0.2539350986480713),new THREE.Vector3(-0.41824889183044434, -0.09579052031040192, 0.25230416655540466),new THREE.Vector3(-0.41710978746414185, -0.08194601535797119, 0.25049859285354614),new THREE.Vector3(-0.41573578119277954, -0.06787528097629547, 0.24852536618709564),new THREE.Vector3(-0.4141414165496826, -0.05358918756246567, 0.2463914453983307),new THREE.Vector3(-0.41234123706817627, -0.03909860551357269, 0.2441037893295288),new THREE.Vector3(-0.4103497862815857, -0.024414408951997757, 0.24166938662528992),new THREE.Vector3(-0.4081816077232361, -0.009547468274831772, 0.23909519612789154),new THREE.Vector3(-0.40585124492645264, 0.005491343326866627, 0.2363881915807724),new THREE.Vector3(-0.40337324142456055, 0.020691152662038803, 0.23355534672737122),new THREE.Vector3(-0.400762140750885, 0.03604108840227127, 0.2306036353111267),new THREE.Vector3(-0.3980324864387512, 0.05153027921915054, 0.2275400161743164),new THREE.Vector3(-0.3951988220214844, 0.06714785099029541, 0.22437146306037903),new THREE.Vector3(-0.39227569103240967, 0.08288293331861496, 0.2211049497127533),new THREE.Vector3(-0.3892776370048523, 0.09872464835643768, 0.21774744987487793),new THREE.Vector3(-0.38621920347213745, 0.11466212570667267, 0.21430592238903046),new THREE.Vector3(-0.38311493396759033, 0.130684494972229, 0.2107873409986496),new THREE.Vector3(-0.37997937202453613, 0.14678089320659637, 0.20719867944717407),new THREE.Vector3(-0.37682706117630005, 0.16294042766094208, 0.2035469114780426),new THREE.Vector3(-0.3736725449562073, 0.179152250289917, 0.19983899593353271),new THREE.Vector3(-0.370530366897583, 0.19540546834468842, 0.19608190655708313),new THREE.Vector3(-0.36741510033607483, 0.21168921887874603, 0.19228261709213257),new THREE.Vector3(-0.36434125900268555, 0.22799262404441833, 0.18844810128211975),new THREE.Vector3(-0.36132338643074036, 0.244304820895195, 0.1845853179693222),new THREE.Vector3(-0.35837602615356445, 0.26061493158340454, 0.18070125579833984),new THREE.Vector3(-0.35551372170448303, 0.2769120931625366, 0.1768028736114502),new THREE.Vector3(-0.3527510464191437, 0.29318541288375854, 0.1728971302509308),new THREE.Vector3(-0.3501025140285492, 0.3094240128993988, 0.16899101436138153),new THREE.Vector3(-0.3475826680660248, 0.3256170451641083, 0.16509148478507996),new THREE.Vector3(-0.345206081867218, 0.34175363183021545, 0.16120551526546478),new THREE.Vector3(-0.3429872691631317, 0.35782289505004883, 0.15734007954597473),new THREE.Vector3(-0.34094077348709106, 0.3738139569759369, 0.15350213646888733),new THREE.Vector3(-0.33908116817474365, 0.3897159695625305, 0.1496986597776413),new THREE.Vector3(-0.3374229669570923, 0.4055180251598358, 0.14593663811683655),new THREE.Vector3(-0.33598071336746216, 0.42120927572250366, 0.14222301542758942),new THREE.Vector3(-0.33476898074150085, 0.43677884340286255, 0.13856478035449982),new THREE.Vector3(-0.3338022828102112, 0.45221585035324097, 0.13496889173984528),new THREE.Vector3(-0.3330951929092407, 0.4675094485282898, 0.13144232332706451),new THREE.Vector3(-0.3326622247695923, 0.48264873027801514, 0.12799204885959625),new THREE.Vector3(-0.33251792192459106, 0.49762284755706787, 0.12462503463029861),new THREE.Vector3(-0.33267685770988464, 0.5124208927154541, 0.12134825438261032),new THREE.Vector3(-0.33315354585647583, 0.5270320177078247, 0.1181686744093895),new THREE.Vector3(-0.3339625597000122, 0.5414453744888306, 0.11509326845407486),new THREE.Vector3(-0.33511844277381897, 0.5556500554084778, 0.11212900280952454),new THREE.Vector3(-0.3366357088088989, 0.5696352124214172, 0.10928285121917725),new THREE.Vector3(-0.33852893114089966, 0.5833899974822998, 0.10656177997589111),new THREE.Vector3(-0.340812623500824, 0.5969035029411316, 0.10397276282310486),new THREE.Vector3(-0.34350135922431946, 0.6101648211479187, 0.1015227660536766),new THREE.Vector3(-0.3466096520423889, 0.623163104057312, 0.09921876341104507),new THREE.Vector3(-0.35015207529067993, 0.6358875036239624, 0.09706772118806839),new THREE.Vector3(-0.3541431725025177, 0.6483271718025208, 0.09507661312818527),new THREE.Vector3(-0.35859745740890503, 0.6604712009429932, 0.09325241297483444),new THREE.Vector3(-0.3635295033454895, 0.6723086833953857, 0.09160207957029343),new THREE.Vector3(-0.3689538538455963, 0.6838287711143494, 0.09013259410858154),new THREE.Vector3(-0.37488505244255066, 0.6950206160545349, 0.08885092288255692),new THREE.Vector3(-0.38133761286735535, 0.7058733105659485, 0.08776403218507767),new THREE.Vector3(-0.38832610845565796, 0.716376006603241, 0.08687889575958252),new THREE.Vector3(-0.3958650827407837, 0.7265178561210632, 0.08620248734951019),new THREE.Vector3(-0.4039689898490906, 0.7362879514694214, 0.08574173599481583),new THREE.Vector3(-0.4126330316066742, 0.7457389235496521, 0.08485940843820572),new THREE.Vector3(-0.4218223989009857, 0.754938542842865, 0.0829344317317009),new THREE.Vector3(-0.43150702118873596, 0.7638986706733704, 0.0799981877207756),new THREE.Vector3(-0.44165679812431335, 0.7726311683654785, 0.07608205825090408),new THREE.Vector3(-0.4522416293621063, 0.7811478972434998, 0.07121741771697998),new THREE.Vector3(-0.4632314443588257, 0.7894607186317444, 0.06543564796447754),new THREE.Vector3(-0.4745961129665375, 0.7975814938545227, 0.058768123388290405),new THREE.Vector3(-0.4863055646419525, 0.805522084236145, 0.05124622583389282),new THREE.Vector3(-0.4983297288417816, 0.8132943511009216, 0.042901329696178436),new THREE.Vector3(-0.5106384754180908, 0.8209101557731628, 0.03376481682062149),new THREE.Vector3(-0.5232017636299133, 0.828381359577179, 0.02386806532740593),new THREE.Vector3(-0.5359894633293152, 0.8357198238372803, 0.013242451474070549),new THREE.Vector3(-0.5489714741706848, 0.8429374098777771, 0.0019193543121218681),new THREE.Vector3(-0.5621176958084106, 0.8500459790229797, -0.010069847106933594),new THREE.Vector3(-0.5753980875015259, 0.8570573925971985, -0.022693775594234467),new THREE.Vector3(-0.5887824892997742, 0.8639835119247437, -0.03592105209827423),new THREE.Vector3(-0.6022408604621887, 0.8708362579345703, -0.04972029849886894),new THREE.Vector3(-0.615743100643158, 0.877627432346344, -0.06406013667583466),new THREE.Vector3(-0.6292591094970703, 0.884368896484375, -0.07890918850898743),new THREE.Vector3(-0.6427587866783142, 0.8910725116729736, -0.09423607587814331),new THREE.Vector3(-0.6562120318412781, 0.897750198841095, -0.11000941693782806),new THREE.Vector3(-0.6695888042449951, 0.9044137597084045, -0.12619782984256744),new THREE.Vector3(-0.682858943939209, 0.9110750555992126, -0.1427699476480484),new THREE.Vector3(-0.6959924101829529, 0.9177459478378296, -0.1596943885087967),new THREE.Vector3(-0.7089591026306152, 0.9244383573532104, -0.17693977057933807),new THREE.Vector3(-0.7217289209365845, 0.9311640858650208, -0.1944747120141983),new THREE.Vector3(-0.734271764755249, 0.9379349946975708, -0.21226784586906433),new THREE.Vector3(-0.7465575337409973, 0.9447630047798157, -0.23028779029846191),new THREE.Vector3(-0.7585561871528625, 0.9516599178314209, -0.2485031634569168),new THREE.Vector3(-0.7702375650405884, 0.9586375951766968, -0.2668825685977936),new THREE.Vector3(-0.781571626663208, 0.9657079577445984, -0.28539466857910156),new THREE.Vector3(-0.7925282716751099, 0.9728828072547913, -0.3040080666542053),new THREE.Vector3(-0.8030773997306824, 0.9801740646362305, -0.3226913809776306),new THREE.Vector3(-0.813188910484314, 0.9875935316085815, -0.3414132297039032),new THREE.Vector3(-0.8228327035903931, 0.9951531291007996, -0.36014223098754883),new THREE.Vector3(-0.8319786787033081, 1.0028647184371948, -0.37884700298309326),new THREE.Vector3(-0.8405967950820923, 1.010740041732788, -0.39749619364738464),new THREE.Vector3(-0.8486568927764893, 1.0187910795211792, -0.41605839133262634),new THREE.Vector3(-0.8561289310455322, 1.0270296335220337, -0.4345022439956665),new THREE.Vector3(-0.8629828095436096, 1.0354676246643066, -0.4527963697910309),new THREE.Vector3(-0.8691884279251099, 1.0441168546676636, -0.47090938687324524),new THREE.Vector3(-0.8747156858444214, 1.0529892444610596, -0.4888099133968353),new THREE.Vector3(-0.8795344829559326, 1.0620965957641602, -0.5064665675163269),new THREE.Vector3(-0.8836147785186768, 1.0714508295059204, -0.5238479971885681),new THREE.Vector3(-0.8869264125823975, 1.0810638666152954, -0.5409227609634399),new THREE.Vector3(-0.8894393444061279, 1.0909473896026611, -0.5576595664024353),new THREE.Vector3(-0.8911234736442566, 1.1011134386062622, -0.5740269422531128),new THREE.Vector3(-0.8919486999511719, 1.1115738153457642, -0.5899935960769653),new THREE.Vector3(-0.8918849229812622, 1.1223403215408325, -0.6055281162261963),new THREE.Vector3(-0.890902042388916, 1.1334248781204224, -0.620599091053009),new THREE.Vector3(-0.8889700174331665, 1.1448392868041992, -0.6351751685142517),new THREE.Vector3(-0.8860586881637573, 1.1565954685211182, -0.6492249965667725),new THREE.Vector3(-0.8821380138397217, 1.1687052249908447, -0.6627171635627747),new THREE.Vector3(-0.877177894115448, 1.181180477142334, -0.6756203174591064),new THREE.Vector3(-0.8711482286453247, 1.194033145904541, -0.6879030466079712),new THREE.Vector3(-0.8640189170837402, 1.2072749137878418, -0.699533998966217),new THREE.Vector3(-0.855759859085083, 1.220917820930481, -0.7104817628860474),new THREE.Vector3(-0.8463409543037415, 1.234973669052124, -0.7207149863243103),new THREE.Vector3(-0.8357321619987488, 1.2494542598724365, -0.730202317237854),new THREE.Vector3(-0.8239033222198486, 1.2643715143203735, -0.7389123439788818),new THREE.Vector3(-0.8108243942260742, 1.2797373533248901, -0.7468137145042419),new THREE.Vector3(-0.796465277671814, 1.2955635786056519, -0.7538750171661377),new THREE.Vector3(-0.7807958722114563, 1.3118619918823242, -0.7600648403167725),new THREE.Vector3(-0.7637860774993896, 1.3286442756652832, -0.7653520703315735),new THREE.Vector3(-0.7460095882415771, 1.3451921939849854, -0.7697463631629944),new THREE.Vector3(-0.7280685305595398, 1.3607925176620483, -0.7732924222946167),new THREE.Vector3(-0.7099757194519043, 1.3754656314849854, -0.7760105133056641),new THREE.Vector3(-0.6917439103126526, 1.3892320394515991, -0.7779209017753601),new THREE.Vector3(-0.6733858585357666, 1.4021120071411133, -0.7790438532829285),new THREE.Vector3(-0.654914379119873, 1.414125919342041, -0.7793996334075928),new THREE.Vector3(-0.6363422274589539, 1.4252941608428955, -0.7790085077285767),new THREE.Vector3(-0.617682158946991, 1.43563711643219, -0.777890682220459),new THREE.Vector3(-0.5989469289779663, 1.4451751708984375, -0.7760664820671082),new THREE.Vector3(-0.5801493525505066, 1.4539287090301514, -0.7735561728477478),new THREE.Vector3(-0.5613021850585938, 1.4619181156158447, -0.7703799605369568),new THREE.Vector3(-0.5424182415008545, 1.4691637754440308, -0.7665581703186035),new THREE.Vector3(-0.523510217666626, 1.475685954093933, -0.7621110081672668),new THREE.Vector3(-0.5045909285545349, 1.4815051555633545, -0.7570587992668152),new THREE.Vector3(-0.4856731593608856, 1.486641764640808, -0.7514217495918274),new THREE.Vector3(-0.46676966547966003, 1.4911161661148071, -0.7452201247215271),new THREE.Vector3(-0.4478932321071625, 1.4949487447738647, -0.7384742498397827),new THREE.Vector3(-0.4290566146373749, 1.4981597661972046, -0.7312043309211731),new THREE.Vector3(-0.41027259826660156, 1.5007697343826294, -0.7234306335449219),new THREE.Vector3(-0.39155396819114685, 1.5027990341186523, -0.7151734232902527),new THREE.Vector3(-0.3729134798049927, 1.504267930984497, -0.7064529657363892),new THREE.Vector3(-0.35436391830444336, 1.5051969289779663, -0.6972895264625549),new THREE.Vector3(-0.33591803908348083, 1.5056062936782837, -0.6877033710479736),new THREE.Vector3(-0.3175886273384094, 1.505516529083252, -0.6777147650718689),new THREE.Vector3(-0.29938843846321106, 1.5049479007720947, -0.6673439741134644),new THREE.Vector3(-0.28133025765419006, 1.5039209127426147, -0.6566112041473389),new THREE.Vector3(-0.26342687010765076, 1.5024558305740356, -0.6455367803573608),new THREE.Vector3(-0.24569103121757507, 1.5005730390548706, -0.6341409683227539),new THREE.Vector3(-0.22813552618026733, 1.4982930421829224, -0.6224439740180969),new THREE.Vector3(-0.21077311038970947, 1.4956361055374146, -0.6104661226272583),new THREE.Vector3(-0.1936165690422058, 1.4926226139068604, -0.5982276201248169),new THREE.Vector3(-0.17667867243289948, 1.4892730712890625, -0.5857487916946411),new THREE.Vector3(-0.1599722057580948, 1.4856077432632446, -0.5730498433113098),new THREE.Vector3(-0.14350992441177368, 1.48164701461792, -0.5601511001586914),new THREE.Vector3(-0.12730461359024048, 1.4774112701416016, -0.5470727682113647),new THREE.Vector3(-0.11136903613805771, 1.4729208946228027, -0.5338351130485535),new THREE.Vector3(-0.0957159698009491, 1.4681962728500366, -0.5204584002494812),new THREE.Vector3(-0.08035818487405777, 1.4632577896118164, -0.5069628953933716),new THREE.Vector3(-0.06530845910310745, 1.4581258296966553, -0.49336889386177063),new THREE.Vector3(-0.05057956278324127, 1.4528207778930664, -0.4796966314315796),new THREE.Vector3(-0.036184266209602356, 1.447363018989563, -0.4659663736820221),new THREE.Vector3(-0.02213534712791443, 1.4417729377746582, -0.4521983861923218),new THREE.Vector3(-0.008445576764643192, 1.4360709190368652, -0.43841293454170227),new THREE.Vector3(0.004872272722423077, 1.4302773475646973, -0.4246302545070648),new THREE.Vector3(0.017805427312850952, 1.4244126081466675, -0.41087064146995544),new THREE.Vector3(0.030341114848852158, 1.418497085571289, -0.3971543312072754),new THREE.Vector3(0.04246656224131584, 1.4125510454177856, -0.3835016191005707),new THREE.Vector3(0.05416899919509888, 1.40659499168396, -0.36993274092674255),new THREE.Vector3(0.06543564796447754, 1.4006493091583252, -0.35646796226501465),new THREE.Vector3(0.076253741979599, 1.394734263420105, -0.3431275486946106),new THREE.Vector3(0.08661050349473953, 1.388870358467102, -0.32993176579475403),new THREE.Vector3(0.09649315476417542, 1.3830779790878296, -0.3169008791446686),new THREE.Vector3(0.10588893294334412, 1.3773773908615112, -0.3040551245212555),new THREE.Vector3(0.11478506028652191, 1.3717890977859497, -0.2914147973060608),new THREE.Vector3(0.12316876649856567, 1.3663333654403687, -0.2790001332759857),new THREE.Vector3(0.13102728128433228, 1.3610306978225708, -0.2668314278125763),new THREE.Vector3(0.1383478194475174, 1.3559013605117798, -0.25492891669273376),new THREE.Vector3(0.1451176106929779, 1.3509658575057983, -0.24331286549568176),new THREE.Vector3(0.15132389962673187, 1.34624445438385, -0.23200355470180511),new THREE.Vector3(0.15695390105247498, 1.3417575359344482, -0.22102123498916626),new THREE.Vector3(0.1619948297739029, 1.3375256061553955, -0.21038615703582764),new THREE.Vector3(0.1664339303970337, 1.3335689306259155, -0.20011860132217407),new THREE.Vector3(0.17025841772556305, 1.3299078941345215, -0.190238818526268),new THREE.Vector3(0.17345550656318665, 1.3265628814697266, -0.18076728284358978),]);export {splineWhite5}