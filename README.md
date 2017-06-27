# akyuu-adapter-memcached-binary

memcached binary protocol adapter for [akyuu](https://github.com/akyuujs/akyuu)

### Installation
```
npm install akyuu-adapter-memcached-binary
```

### Configuration
Make sure you have a connections section in your configuration file(s).  
And its adapter should be `memcached-binary`.

option | required | remark
---- | ---- | ----
adapter | ✓ | must be `memcached-binary`
serverUri | ✓ | e.g. `username:password@host:port`

### Usage
#### Config File
```
// ${project}/config/default/connections.js

'use strict'

module.exports = {
    myMemcached: {
        adapter: 'memcached-binary',
        serverUri: 'tom:xafqfdagqqv@127.0.0.1:11211'
    }
}
```

#### Model File
```
// ${project}/models/${model}.js

'use strict'

const akyuu = require('akyuu');
const memcachedClient = akyuu.config.connection.get('myMemcached');

module.exports = redisClient;

```
