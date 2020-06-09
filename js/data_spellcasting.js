data_spellcasting_spellinfo = [
  {
    title: "Заговоры",
    icon: "bolt-spell-cast",
    subtitle: "Простые заклинания и фокусы",
    description: "Простые заклинания и фокусы",
    reference: "КИ, стр. 201",
    bullets: [
             "Заговоры это заклинания, которые накладывается очень легко, без использования ячеек заклинаний и подготовки. Постоянное использование закрепило их в сознании заклинателя и даровало магию, необходимую для постоянного воплощения их эффектов. Уровень заговоров всегда 0."
         ]
     },
  {
    title: "Ритуалы",
    icon: "rune-stone",
    subtitle: "Заклинания с долгим наложением",
    description: "Заклинания с долгим наложением",
    reference: "КИ, стр. 201-202",
    bullets: [
             "У некоторых заклинаний есть специальное ключевое слово: «ритуал». Такое заклинание можно использовать по обычным правилам использования заклинаний, или же использовать его как ритуал. Ритуальная версия накладывается на 10 минут дольше, чем обычно.",
             "Она не использует ячейку заклинания, а значит, ритуальную версию заклинания нельзя использовать с увеличенным уровнем.",
             "Для использования заклинания в качестве ритуала заклинатель должен иметь умение, позволяющее делать это. У жрецов и друидов, например, есть такое умение. Заклинатель должен при этом иметь это заклинание подготовленным или просто иметь его в списках известных заклинаний, если в ритуальном умении не сказано обратное, как, например, у волшебника."
         ]
     },
  {
    title: "Ячейки заклинаний",
    icon: "shotgun",
    subtitle: "Количество использований",
    description: "Сколько заклинаний можно наложить",
    reference: "КИ, стр. 201",
    bullets: [
             "Вне зависимости от того, сколько заклинаний знает или подготовил заклинатель, он может использовать ограниченное их количество, после чего ему вновь понадобиться отдохнуть. Манипулирование тканью магии и пропускание через себя её энергии выматывает физически и умственно, особенно если заклинание высокоуровневое. Таким образом, в описании всех классов заклинателей (колдун — исключение) есть таблица, показывающая, сколько ячеек заклинаний того или иного уровня заклинаний у персонажа есть на данном уровне.",
             "<div class='section-title-subtitle'>Накладывание заклинания с увеличенным уровнем</div> Если заклинатель накладывает заклинание, используя ячейку с уровнем, превышающим уровень заклинания, заклинание при этом считается имеющим увеличенный уровень. Например, если Умара накладывает волшебную стрелу, используя одну из своих ячеек 2 уровня, это будет волшебная стрела 2 уровня. Фактически, заклинание усиливается, заполняя предоставленную ему ячейку."
         ]
     },
]

data_spellcasting_casting = [
  {
    title: "Время наложения",
    icon: "sands-of-time",
    subtitle: "Продолжительность наложения",
    description: "Большинство заклинаний накладываются действием, но некоторые накладываются бонусным действием, реакцией, или же требуют долгого времени.",
    reference: "КИ, стр. 203",
    bullets: [
             "<div class='section-title-subtitle'>Бонусное действие</div>Заклинания, накладываемые бонусным действием, особенно быстры. Для накладывания такого заклинания вы должны в свой ход использовать бонусное действие, при условии, что в этом ходу ещё не совершали бонусных действий. В этом ходу вы уже не сможете накладывать другие заклинания, за исключением заговоров со временем накладывания «1 действие».",
             "<div class='section-title-subtitle'>Реакция</div>Некоторые заклинания накладываются реакцией. Эти заклинания активируются за считанные доли секунды, и накладываются в ответ на определённые события. Если заклинание может быть наложено в качестве реакции, в описании будет сказано, когда именно вы можете это сделать.",
             "<div class='section-title-subtitle'>Долгое активирование</div>Некоторые заклинания (в том числе заклинания, активированные в качестве ритуалов) требуют больше времени на активацию: от нескольких минут до нескольких часов. Если вы используете заклинание со временем накладывания больше одного действия или реакции, вы должны каждый свой ход тратить действие на накладывание этого заклинания, и поддерживать при этом концентрацию. Если концентрация нарушена, заклинание проваливается, но ячейка заклинания не тратится. Если захотите снова наложить это заклинание, придётся начать всё с начала."
         ]
     },
  {
    title: "Дистанция",
    icon: "path-distance",
    subtitle: "Дальность заклинания",
    description: "Как далеко достигает заклинание",
    reference: "КИ, стр. 203-204",
    bullets: [
             "Цель заклинания должна находиться в пределах дистанции заклинания. Для таких заклинаний как волшебная стрела целью является существо. Для такого заклинания как огненный шар целью является точка в пространстве, из которой исходит огненный шар.",
             "Дистанция большинства заклинаний указана в футах. Некоторые заклинания нацеливаются только на одно существо, которого вы коснётесь (включая вас). Другие заклинания, такие как щит, действуют только на вас. У таких заклинаний указана дистанция «На себя».",
             "Заклинания, создающие конусы или линии эффекта, исходящие от вас, тоже обладают дистанцией «На себя», что означает, что исходной клеткой эффекта должны быть вы."
         ]
     },
  {
    title: "Компоненты",
    icon: "feather",
    subtitle: "Требования заклинаний",
    description: "Компоненты заклинания это требования, которые нужно выполнить, чтобы его активировать. В описании заклинания сказано, использует ли оно вербальный (В), соматический (С) или материальный (М) компоненты. Если вы не можете предоставить хотя бы один из компонентов заклинания, вы не можете его активировать.",
    reference: "КИ, стр. 204",
    bullets: [
             "<div class='section-title-subtitle'>Вербальный (В)</div>Большинство заклинаний требуют произношения таинственных слов. Сами по себе слова не являются источником силы заклинания; просто комбинация звуков с особой тональностью вызывает резонанс в прядях магии, приводя их в движение. Таким образом, персонаж с кляпом во рту или в области заклинания тишина, не может активировать заклинания с вербальным компонентом.",
             "<div class='section-title-subtitle'>Соматический (С)</div>Заклинание может требовать энергичной жестикуляции или замысловатой последовательности телодвижений. Если у заклинания есть соматический компонент, у заклинателя должна быть свободной хотя бы одна рука для исполнения этих жестов.",
             "<div class='section-title-subtitle'>Материальный (М)</div>Накладывание некоторых заклинаний требует наличия особых предметов, указанных в скобках в описании заклинания. Персонаж может использовать мешочек с компонентами или заклинательную фокусировку (смотрите в главе 5) вместо указанных компонентов. Однако, если для компонента указана цена, у персонажа для накладывания заклинания должен быть именно такой компонент.",
             "Если в заклинании сказано, что материальные компоненты расходуются, заклинатель должен предоставить компоненты для каждого использования этого заклинания.",
             "У заклинателя должна быть одна свободная рука для доступа к материальным компонентам, но это может быть та же самая рука, что используется для выполнения соматического компонента."
         ]
     },
  {
    title: "Длительность",
    icon: "empty-hourglass",
    subtitle: "Продолжительность заклинания",
    description: "Длительность заклинания это время, в течение которого это заклинание будет активно. Длительность может измеряться в раундах, минутах, часах и даже годах. Некоторые заклинания указывают, что их эффект длится до тех пор, пока не будет рассеян или уничтожен.",
    reference: "КИ, стр. 204-205",
    bullets: [
             "<div class='section-title-subtitle'>Мгновенно</div>Многие заклинания мгновенны. Заклинания, причиняющие урон, лечащие, создающие или изменяющие существ или предметы, не могут быть рассеяны, потому что магия возникает на непродолжительное время.",
             "<div class='section-title-subtitle'>Концентрация</div> Некоторые заклинания требуют от вас сохранения концентрации для поддерживания магии в активном состоянии. Если вы потеряете концентрацию, такое заклинание оканчивается. Если заклинание должно поддерживаться концентрацией, это указывается в разделе Длительность, и там же указывается, сколько можно концентрироваться на нём. Вы можете окончить концентрацию в любое время (действие не требуется). Нормальная деятельность, такая как перемещение и сражение, не прерывают концентрацию. Её могут прервать следующие события:\
             <ul>\
               <li><b>Накладывание другого заклинания, требующего концентрацию.</b> Вы теряете концентрацию на заклинании, если накладываете другое заклинание, требующее концентрации. Нельзя концентрироваться на двух заклинаниях одновременно.</li>\
               <li><b>Получение урона.</b> Каждый раз, когда вы получаете урон во время концентрации на заклинании, вы должны совершить спасбросок Телосложения для продолжения концентрации. Сл равна 10 или половине причинённого урона, в зависимости от того, что выше. Если вы получаете урон из нескольких источников, например, от стрелы и дыхания дракона, вы совершаете отдельные спасброски для каждого источника урона.</li>\
               <li><b>Недееспособность или смерть.</b> Вы теряете концентрацию на заклинании, если становитесь недееспособным или умираете.</li>\
             </ul>\
             Мастер может также решить, что определённые эффекты окружения, такие как накатившая на корабль волна во время шторма, требуют совершения спасброска Телосложения со Сл 10, чтобы сохранить концентрацию на заклинании."
         ]
     },
  {
    title: "Цели",
    icon: "archery-target",
    subtitle: "Цель заклинания",
    description: "Цель заклинания",
    reference: "КИ, стр. 205",
    bullets: [
             "Обычно заклинание требует, чтобы вы выбрали одну или несколько целей, которые и попадут под действие магии заклинания. В описании заклинания сказано, на что оно нацеливается — на существ, предметы, или точку в пространстве. <br><br>Если у цели нет воспринимаемого эффекта, существо может вообще не узнать, что было целью заклинания. Естественно, трещащие молнии легко заметить, но тайные эффекты, такие как попытки прочесть мысли, обычно проходят незамеченными, если в описании заклинания не сказано обратное.",
             "<div class='section-title-subtitle'>Свободный путь до цели</div>Чтобы на что-то нацелиться, у вас должен быть свободный путь, поэтому у цели не должно быть полного укрытия. <br><br>Если вы создаёте область воздействия в точке, которую не видно из-за препятствия, и между вами и этой точкой есть сплошная преграда, такая как стена, исходная точка возникнет с ближайшей к вам стороны этой преграды.",
             "<div class='section-title-subtitle'>Нацеливание на себя</div>Если заклинание нацеливается на любое существо, вы можете выбрать себя, кроме тех случаев, когда существо должно быть враждебным, или когда указано, что это должно быть существо, отличное от вас. Если вы находитесь в области эффекта, наложенного вами же заклинания, вы можете сделать целью себя."
         ]
     },
  {
    title: "Область воздействия",
    icon: "stone-sphere",
    subtitle: "Зона эффекта заклинания",
    description: "Зона эффекта заклинания",
    reference: "КИ, стр. 205-206",
    bullets: [
             "Такие заклинания как конус холода и огненные ладони создают область, позволяющую воздействовать сразу на несколько существ. <br><br> Описание заклинания определяет область воздействия, которая обычно принимает одну из пяти разных форм: конус, куб, линия, сфера или цилиндр. У каждой области воздействия есть исходная точка, место, из которого исходит энергия заклинания. Правила форм определяют, как вы можете размещать исходную точку. Обычно исходная точка это точка в пространстве, но области некоторых заклинаний исходят из существ или предметов. <br><br> Эффект заклинания распространяется по прямым линиям из исходной точки. Если до какого-то места в области воздействия нет свободных линий от исходной точки, это место не включается в область воздействия. Для блокирования таких воображаемых линий препятствие должно предоставлять полное укрытие.",
             "<div class='section-title-subtitle'>Конус</div> Конус простирается в выбранном вами направлении из исходной точки. Ширина конуса на том или ином расстоянии от исходной точки равна расстоянию от этого места до исходной точки. Область воздействия конуса указывает его максимальную длину.",
             "<div class='section-title-subtitle'>Куб</div> Вы выбираете исходную точку куба, лежащую на любой из граней кубического эффекта. Для куба указывается длина его ребра.",
             "<div class='section-title-subtitle'>Цилиндр</div> Исходная точка цилиндра является центром круга определённого радиуса, указанного в описании заклинания. Круг должен быть верхним или нижним основанием цилиндра. Энергия расширяется по прямым линиям из исходной точки до периметра круга, формируя основание. После этого эффект заклинания «выстреливает» вверх или вниз, на расстояние, равное высоте цилиндра.",
             "<div class='section-title-subtitle'>Линия</div> Линия простирается из исходной точки по прямому пути на расстояние, равное своей длине и покрывает площадь, определяемую её шириной.",
             "<div class='section-title-subtitle'>Сфера</div> Вы выбираете исходную точку сферы, и она исходит из неё. Размер сферы определяется радиусом, а центром будет исходная точка."
         ]
     },
  {
    title: "Спасброски",
    icon: "run",
    subtitle: "Шанс избежать эффекта",
    description: "Шанс избежать эффекта заклинания",
    reference: "КИ, стр. 206",
    bullets: [
             "Во многих заклинаниях указано, что цель может совершить спасбросок для избавления от части эффектов заклинания. В описании заклинания сказано, какая характеристика при этом используется, и что происходит при успешном или провальном спасброске.",
             "Сл противостояния вашим заклинаниям равна 8 + модификатор вашей базовой характеристики + ваш бонус мастерства + все особые модификаторы."
         ]
     },
  {
    title: "Броски Атаки",
    icon: "fireball",
    subtitle: "Атака заклинаниями",
    description: "Атака заклинаниями",
    reference: "КИ, стр. 206",
    bullets: [
             "Некоторые заклинания требуют, чтобы заклинатель совершил бросок атаки, дабы определить, попал ли эффект заклинания по выбранной цели. Ваш бонус атаки атакой заклинанием равен модификатору вашей базовой характеристики + ваш бонус мастерства.",
             "Большинство заклинаний, требующих броска атаки, совершают дальнобойные атаки. Помните, что вы совершаете броски дальнобойных атак с помехой, если в пределах 5 футов есть враждебное дееспособное существо, видящее вас (смотрите в главе 9)."
         ]
     },
  {
    title: "Объединение эффектов",
    icon: "crafting",
    subtitle: "Как складываются эффекты",
    description: "Как складываются эффекты",
    reference: "КИ, стр. 206",
    bullets: [
             "Эффекты разных заклинаний складываются, пока их длительность перекрывается. Однако, эффекты одного и того же заклинания, наложенного несколько раз, не складываются. Вместо этого применяется только самый сильный из эффектов (например, дающий больший бонус), пока длительность двух эффектов перекрывает друг друга.",
             "Например, если два жреца наложат благословение на одну и ту же цель, этот персонаж получит преимущество от этого заклинания только один раз; он не будет бросать две бонусных кости."
         ]
     },
]
