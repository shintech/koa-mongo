const { URL } = require('url')
const path = require('path')
const pkg = require('./package.json')
const configDB = require('./server/db')
const mongoose = require('mongoose')

const urls = {
  posts: new URL('http://localhost:65332')
}

global._url = urls

global.process.env = {
  POSTS_URL: urls.posts,
  NODE_ENV: 'test'
}

const root = __dirname
const environment = 'test'
const port = 8000
const host = 'localhost'

const logger = require('shintech-logger')({ environment })
const db = configDB({ logger, environment })

const server = require(path.join(__dirname, 'server'))({ pkg, db, logger, environment, port, host, root })

const app = server.listen()

app.on('close', () => {
  const connection = mongoose.connection
  connection.close()
})

global._server = app

global._postsMock = [
  {
    '__v': 0,
    '_id': '5ba42ebe12b2fa43c2be5b7d',
    'body': 'Dignissimos voluptatem eaque ea autem magni modi ducimus. Et quo perferendis impedit. Dolore hic qui. Quae deleniti cupiditate non quos quia. Doloribus velit adipisci.\n \rOmnis aliquam quia modi dolore officiis. Voluptatibus nesciunt quidem recusandae iusto veniam perferendis officiis. Sed molestias sint illo. Minus maiores consequatur sunt officia laboriosam corporis quia sit sed. Sit eligendi quia alias porro hic doloremque.\n \rUt ducimus voluptate voluptatem nisi. Optio non et cumque. Eos accusamus necessitatibus quis perspiciatis est perspiciatis itaque eos. Perferendis minima labore consequuntur omnis. Perspiciatis sunt quae enim vero vero qui id quam nam. Qui nihil qui ducimus.',
    'summary': 'Et inventore veniam. Delectus a dolorem eos doloremque voluptatibus itaque molestiae quidem exercitationem. Illo perspiciatis nihil iure et corporis accusamus facilis dolorem sunt. Laudantium accusantium amet eveniet iure tenetur ex expedita aspernatur distinctio. Voluptatem provident voluptatem repellat quasi.',
    'title': 'Alias laudantium at non.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a736898b',
    'body': 'Qui ut aut. Optio porro debitis eos iusto sunt. Tempora voluptas rerum occaecati excepturi vero. Voluptatibus at quia.\n \rPerspiciatis temporibus officia itaque ipsum quaerat fuga molestiae error. Quaerat tempora nemo sunt rerum vel. Laborum omnis placeat nihil ut nam ullam. Vel repellendus quas placeat laudantium provident dolore temporibus.\n \rRerum error sunt. Id odio ut consectetur et. Qui eius quo dolorum. Accusamus voluptatem omnis itaque et sapiente incidunt.',
    'summary': 'Non omnis est. Dolorem debitis aut earum. Voluptas et delectus molestiae. Voluptas eos officia.',
    'title': 'Et eveniet ullam ea ut veniam.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a736898c',
    'body': 'Libero ut sit dolores voluptatem ad quis sed. Qui maiores natus. Laudantium et inventore magni quia cum qui. Voluptatem doloremque porro ut. Et delectus voluptatibus consequatur velit.\n \rVoluptates dolorum omnis laudantium porro nemo delectus deleniti labore non. Suscipit similique debitis nihil ea aut temporibus. Ut quia quia et officiis velit voluptas ut. Est aut eum ratione soluta sint inventore.\n \rIusto qui exercitationem optio rem iusto saepe possimus fugiat. Sunt libero laboriosam quibusdam necessitatibus consequatur quibusdam. Quis vitae ipsam illum vel eos. Consequatur nesciunt blanditiis sint sequi ipsa explicabo sapiente. Assumenda asperiores et nostrum quos eveniet laboriosam.',
    'summary': 'Ipsa quia dolor reprehenderit aut eum et incidunt aperiam at. Ipsam eos a cumque et optio sunt explicabo aut.',
    'title': 'Temporibus explicabo vel voluptatem et consectetur rerum.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a736898d',
    'body': 'Incidunt id in qui tempora. Est dolore dolorem dolorum ullam in non. Et aspernatur debitis eum voluptas qui neque dolore. Veniam ea corrupti voluptatem expedita ut neque consectetur. Ut sit expedita quis consequatur. Expedita aut harum illo mollitia.\n \rPorro quia omnis nobis voluptatem eos. Temporibus voluptatem molestias consequatur porro. Sint earum odit consequatur explicabo molestiae numquam recusandae cumque qui. Enim vitae vero harum.\n \rFacilis aut quod. Cum iure sequi dolore magnam qui reprehenderit quidem. Et voluptatibus neque sed totam et sunt repudiandae neque vero.',
    'summary': 'Est rem nesciunt rerum nisi enim velit quia. Et saepe sapiente molestiae facere cupiditate libero dignissimos sint et. Dicta consequuntur iste accusamus animi molestiae rerum vitae asperiores. Et mollitia nisi in ut suscipit.',
    'title': 'Aperiam consequatur non at voluptate est itaque qui.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a736898e',
    'body': 'Aut minima iusto laboriosam qui. Dolorum tempore velit qui quos facilis qui. Nemo ipsam a occaecati dolore omnis doloremque aliquid velit fugit. Similique voluptatem veritatis repudiandae dolorum dolorem enim omnis expedita ipsa. Nisi et delectus omnis magni. Et consectetur numquam ut sapiente.\n \rQui harum quis numquam repudiandae iste. Facilis ab exercitationem aut voluptatibus labore consequatur. Dolores rerum et corporis hic. Sit saepe cum quibusdam et sed odit labore. Omnis repellendus libero enim quaerat eum nulla. Similique voluptates et ipsam eos est temporibus eum.\n \rCupiditate molestias at. Commodi et sint nostrum id. Perferendis sunt ut rerum. Quo excepturi sequi ipsum iusto illum. Fugiat consequatur ex placeat consequuntur et. Aliquam nisi id enim aut culpa dolor laborum.',
    'summary': 'Dolorum magnam et exercitationem. Saepe iusto nostrum voluptatibus qui in amet magni id.',
    'title': 'Et perferendis est ullam ut quia recusandae sint.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a736898f',
    'body': 'Quis iusto est non dicta et et qui minima ad. Dolores qui repellat rerum molestiae. Sapiente aut earum tempore explicabo rerum earum. Aut necessitatibus porro. Fuga tempora magnam molestias quam sint. Ea quo voluptate qui alias autem possimus inventore.\n \rEst quae aut ullam saepe perspiciatis. Incidunt blanditiis magni odit est in. Corporis nesciunt eius. Qui dolores magnam atque dolor in iure veritatis. Quaerat necessitatibus temporibus qui deleniti eligendi quia molestiae ullam.\n \rVoluptate placeat debitis libero. Et non sed excepturi pariatur molestiae. Ipsum voluptatem vero aliquid in. Magni adipisci qui. Illo id autem quia quod sunt debitis rerum.',
    'summary': 'Quaerat tempore in distinctio porro et. Reprehenderit qui enim aut numquam ut autem ducimus aspernatur. Ipsam accusamus ex ducimus minus. Dolores saepe qui ut inventore architecto doloremque. Inventore ut illum odio excepturi ullam.',
    'title': 'Cupiditate quod fuga nostrum.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a7368990',
    'body': 'Enim incidunt magnam. Doloribus aut dolorem. Ex sit in. Aut omnis qui nulla error eum mollitia non exercitationem. Vero eum id aut odio non.\n \rDolores consequatur asperiores. Aspernatur alias inventore error itaque aperiam ipsum. Corporis fuga laboriosam occaecati nemo et similique voluptatem ex. Quas est qui nam animi aut facilis. Cumque ut eius. Deleniti suscipit sequi delectus dolores placeat ut.\n \rQui voluptas reprehenderit odit. Molestiae magni et reprehenderit iure delectus iure dolores. Aut deleniti quo sit consequatur aut provident rem. Adipisci illo reprehenderit temporibus ex iste ut placeat. Velit porro mollitia qui quaerat qui.',
    'summary': 'Consequatur sed quia illum quaerat occaecati in. Qui officiis delectus iusto.',
    'title': 'Fugit sunt occaecati.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a7368991',
    'body': 'Dolorum perspiciatis molestiae et eos. Natus quia ipsa. Vero libero excepturi odio neque at et.\n \rFuga deleniti cum et distinctio quo qui. Tenetur est omnis et minus excepturi architecto perferendis sunt. Quis consequatur odit accusamus et sunt praesentium ea explicabo. Modi nihil soluta.\n \rVoluptatem sed rerum minus. Cum quibusdam temporibus quia ut doloribus inventore. Ex delectus alias animi molestiae iste voluptatem molestias exercitationem est. Alias ratione ratione est odio. Est delectus veritatis laboriosam quis labore ut eos at. Et ad enim.',
    'summary': 'Eligendi ut doloremque. Minima ut nihil qui ea quasi molestias incidunt.',
    'title': 'Magni distinctio hic aut impedit dolorum eum voluptate omnis.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a7368992',
    'body': 'Reiciendis alias est at rerum. Dolorem quia quisquam. Voluptas iste non. Illum quia id voluptatem aut dignissimos qui iste natus perspiciatis. Iure porro repudiandae consequuntur natus maiores et. Quas quam recusandae.\n \rUt cupiditate laborum illo natus ut asperiores repellat sequi quo. Minus vitae aliquam voluptatum reprehenderit temporibus aliquam omnis necessitatibus ut. Rerum quod facere sed enim autem.\n \rConsequuntur aspernatur error. Ullam totam debitis qui vitae illum est voluptatem. Rerum excepturi necessitatibus.',
    'summary': 'At doloremque ea praesentium enim illo aut sequi veniam et. Autem aliquid et iure.',
    'title': 'Quis deleniti nobis eius esse omnis sit.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a7368993',
    'body': 'Laboriosam voluptas eveniet et. Ratione eum aut tempore quis excepturi rerum hic. Aut rerum rem quisquam id. Inventore et in. Sit est aut ut officiis ipsa expedita.\n \rError modi optio corporis nihil. Consectetur cupiditate voluptas ratione quisquam. Aliquid possimus illum voluptatibus quam. At laudantium facilis quos magnam. At ut voluptate. Iure dolor quo reprehenderit et rem et laboriosam.\n \rLaborum aut labore. Explicabo quasi sed itaque. Impedit ut eos labore est excepturi aliquam dolor qui. Veniam aut perferendis pariatur iure quidem. Delectus quia accusantium nesciunt voluptatibus eos non accusamus.',
    'summary': 'Non voluptatem ipsum modi. Aperiam molestias autem voluptatem perspiciatis ea cupiditate ducimus voluptatum. Sit cum est. Ipsum a officia eum ea. Iure quisquam qui velit reprehenderit voluptate.',
    'title': 'Ipsum occaecati voluptatem esse.'
  },
  {
    '__v': 0,
    '_id': '5ba42f9d03193144a7368994',
    'body': 'Enim nam itaque tempora porro ex. Ab odit libero consequuntur in et. Molestiae molestias consectetur eligendi qui. Incidunt dolorum corrupti explicabo id officia. Unde necessitatibus nobis cum sed iste quia molestiae voluptas. Architecto qui nihil quia adipisci recusandae similique reprehenderit.\n \rAccusantium et et voluptatem labore et quo. Asperiores architecto optio voluptatibus. Magnam adipisci repudiandae voluptas officiis optio. Sint et consequatur consequatur quis rerum rerum aut quia modi. Officia numquam pariatur iure rem commodi.\n \rAd ut ut dicta. Quo consequatur beatae adipisci totam sapiente. Aut natus sed doloribus iste vel est et. Est voluptatum velit voluptas ut quia eligendi tenetur dicta consequatur. Cupiditate adipisci exercitationem omnis. Recusandae corporis dolor minus sapiente quia libero.',
    'summary': 'Aliquid ex fugiat et. Quia debitis sequi optio consequatur quibusdam nihil. Accusamus minus nisi reprehenderit expedita.',
    'title': 'Similique totam ab ipsam reiciendis deleniti facere voluptatibus cupiditate officia.'
  }
]
