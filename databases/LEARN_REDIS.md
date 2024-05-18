# Redis Cheatsheet

-redis-server /path/redis.conf # start redis with the related configuration file

-redis-cli # opens a redis prompt - -[Redis Docs](https://redisdesktopmanager.readthedocs.io/en/latest/) -
-## TXP Example -

```bash
>INFO

"# Server
redis_version:3.2.6
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:89a404fe361929e3
redis_mode:standalone
os:Linux 4.1.12-124.26.10.el7uek.x86_64 x86_64
arch_bits:64
multiplexing_api:epoll
gcc_version:4.9.2
...
```

```bash
-> keys *
->> all keys -
-> KEYS *geoindex
-1) "geoindex_2"
-2) "geoindex" -
-> ZCARD geoindex
-"1" -
-> GEORADIUS geoindex 45.511942 -73.570064 3 km WITHDIST ASC
-1) "vZo3UmR"
-2) "4.1119" -
-SCARD ips:coop >> "3" -
-HGETALL taxi:29yqx6a >> 1) "coop" 2) "1507737272 45.61155 -73.8404 free phone 2" -
-GET databases >> to list all databases -
-INFO keyspace >> to list the db for which some keys are defined -
->ZRANGE geoindex 0 -1

- 1.  "42rpk2E"
- 2.  "GaUgYDu"
- 3.  "v4SpEny"
- -ZRANGE geoindex_2 0 -1
  -1) "42rpk2E:enzonewmongodev@mtl.ca"
  -2) "GaUgYDu:enzonewmongodev@mtl.ca"
  -3) "v4SpEny:enzonewmongodev@mtl.ca"
- -> ZRANGEBYSCORE geoindex 0 '+inf' WITHSCORES
- 1.  "tNV4rd5"
- 2.  "2410211299718434"
- 3.  "42rpk2E"
- 4.  "2410211821335761"
- 5.  "GaUgYDu"
- 6.  "2410211821335761"
- 7.  "v4SpEny"
- 8.  "2410211821335761"
- -GEOPOS geoindex 42rpk2E
  -1) 1) "45.51193982362747192"
  -2) "-73.57006493115392232"
- ->ZSCORE timestamps "42rpk2E:enzonewmongodev@mtl.ca"
  -"1560967978"
- -ZSCORE timestamps "42rpk2E"
  -```
- -### Creating a geospatial example
- -```
  -GEOADD cars -73.607919 45.511885 car1
  -GEOADD cars -73.607920 45.511886 car2
  -GEOADD cars -73.607920 45.511885 car3
  -GEOADD cars -73.607919 45.511886 car4
  -GEOADD cars -73.608000 45.511885 car5
  -GEOADD cars -73.608100 45.511885 car6
- -TYPE cars
  ->> "zset"
- -GEODIST cars car5 car6
  ->> "7.9443"
- -GEORADIUS cars -73.608000 45.511885 1 km WITHDIST
  ->> 1) 1) "car6"
- 2.  "0.0078"
-
- 2.  1.  "car5"
- 2.  "0.0001"
-
- 3.  1.  "car1"
- 2.  "0.0064"
-
- 4.  1.  "car2"
- 2.  "0.0064"
-
- 5.  1.  "car3"
- 2.  "0.0064"
-
- 6.  1.  "car4"
- 2.  "0.0064"
- -> ZRANGEBYSCORE sbTestMoteur_test_operator 0 '+inf' 'WITHSCORES'
  -..

-> HSET taxi:3gCy2SN enzonewmongodev@mtl.ca '1568226120 45.38852053 -73.84394873 free free phone 2'

-```

- -[Redis cars example](https://redislabs.com/redis-best-practices/indexing-patterns/geospatial/)
- -# Data Types
- -Redis support 5 data types: `Strings`, `Hashes`, `List`, `Sets`, `Sorted Sets`.
- -[Redis_getting_started](https://blog.faodailtechnology.com/getting-started-with-redis-i-ed55578f36d1)
- -[Redis_data_type](https://www.tutorialspoint.com/redis/redis_data_types.htm)
- -## Strings
- -`-$ SET key_name "string_value" ->> OK -$ GET key_name ->> "string_value" -`
- -APPEND key value # append a value to a key
  -BITCOUNT key [start end] # count set bits in a string
  -SET key value # set value in key
  -SETNX key value # set if not exist value in key
  -SETRANGE key offset value # overwrite part of a string at key starting at the specified offset
  -STRLEN key # get the length of the value stored in a key
  -MSET key value [key value ...] # set multiple keys to multiple values
  -MSETNX key value [key value ...] # set multiple keys to multiple values, only if none of the keys exist
  -GET key # get value in key
  -GETRANGE key value # get a substring value of a key and return its old value
  -MGET key [key ...] # get the values of all the given keys
  -INCR key # increment value in key
  -INCRBY key increment # increment the integer value of a key by the given amount
  -INCRBYFLOAT key increment # increment the float value of a key by the given amount
  -DECR key # decrement the integer value of key by one
  -DECRBY key decrement # decrement the integer value of a key by the given number
  -DEL key # delete key
- -EXPIRE key 120 # key will be deleted in 120 seconds
  -TTL key # returns the number of seconds until a key is deleted
- -## Lists
- -`-LPUSH mylist a # now the list is "a" -LPUSH mylist b # now the list is "b","a" -`
- -RPUSH mylist b
- -A list is a series of ordered values.
- -RPUSH key value [value ...] # put the new value at the end of the list
  -RPUSHX key value # append a value to a list, only if the exists
  -LPUSH key value [value ...] # put the new value at the start of the list
  -LRANGE key start stop # give a subset of the list
  -LINDEX key index # get an element from a list by its index
  -LINSERT key BEFORE|AFTER pivot value # insert an element before or after another element in a list
  -LLEN key # return the current length of the list
  -LPOP key # remove the first element from the list and returns it
  -LSET key index value # set the value of an element in a list by its index
  -LTRIM key start stop # trim a list to the specified range
  -RPOP key # remove the last element from the list and returns it
  -RPOPLPUSH source destination # remove the last element in a list, prepend it to another list and return it
  -BLPOP key [key ...] timeout # remove and get the first element in a list, or block until one is available
  -BRPOP key [key ...] timeout # remove and get the last element in a list, or block until one is available
- -## Sets.
- -`-SADD myset "val1" -SADD myset "val2" -`
- -A Set is similar to a list, except it does not have a specific order and each element may only appear once.
- -SADD key member [member ...] # add the given value to the set
  -SCARD key # get the number of members in a set
  -SREM key member [member ...] # remove the given value from the set
  -SISMEMBER myset value # test if the given value is in the set.
  -SMEMBERS myset # return a list of all the members of this set
  -SUNION key [key ...] # combine two or more sets and returns the list of all elements
  -SINTER key [key ...] # intersect multiple sets
  -SMOVE source destination member # move a member from one set to another
  -SPOP key [count] # remove and return one or multiple random members from a set
- -## Sorted Sets
- -```
  -> ZCOUNT timestamps -inf +inf
  -"1"
- -> ZCOUNT timestamps 0 1560872207
  -"1"
- ->ZRANGE geoindex 0 -1
- 1.  "42rpk2E"
- 2.  "GaUgYDu"
- 3.  "v4SpEny"
- -> ZRANGEBYSCORE geoindex 0 '+inf' WITHSCORES
- -1) "42rpk2E"
  -2) "2410211821335761"
  -3) "GaUgYDu"
  -4) "2410211821335761"
  -5) "v4SpEny"
  -6) "2410211821335761"
  -```
- -A sorted set is similar to a regular set, but now each value has an associated score.
- -This score is used to sort the elements in the set.
- -ZADD key [NX|XX][ch] [INCR] score member [score member ...] # add one or more members to a sorted set, or update its score if it already exists
- -ZCARD key # get the number of members in a sorted set
  -ZCOUNT key min max # count the members in a sorted set with scores within the given values
  -ZINCRBY key increment member # increment the score of a member in a sorted set
  -ZRANGE key start stop [WITHSCORES] # returns a subset of the sorted set
  -ZRANK key member # determine the index of a member in a sorted set
  -ZREM key member [member ...] # remove one or more members from a sorted set
  -ZREMRANGEBYRANK key start stop # remove all members in a sorted set within the given indexes
  -ZREMRANGEBYSCORE key min max # remove all members in a sorted set, by index, with scores ordered from high to low
  -ZSCORE key member # get the score associated with the given mmeber in a sorted set
- -ZRANGEBYSCORE key min max [WITHSCORES][limit offset count] # return a range of members in a sorted set, by score
- -## Hashes
- -A Redis hash is a collection of key value pairs. Hashes are maps between string fields and string values, so they are the perfect data type to represent objects.
- -```
  -HMSET taxi:test 1560540375 45.511885 -73.607919 free phone 2
- -HGETALL taxi:test
-
- 1.  "1560540375"
- 2.  "45.511885"
- 3.  "-73.607919"
- 4.  "free"
- 5.  "phone"
- 6.  "2"
- -HGETALL taxi:29yqx6a
  -1) "coop"
  -2) "1507737272 45.61155 -73.8404 free phone 2"
  -```
- -GEORADIUS taxi:test 45.511890 -73.607920 3 km WITHDIST
  -"WRONGTYPE Operation against a key holding the wrong kind of value"
- -HGET key field # get the value of a hash field
  -HGETALL key # get all the fields and values in a hash
  -HSET key field value # set the string value of a hash field
  -HSETNX key field value # set the string value of a hash field, only if the field does not exists
  -HMSET key field value [field value ...] # set multiple fields at once
  -HINCRBY key field increment # increment value in hash by X
  -HDEL key field [field ...] # delete one or more hash fields
  -HEXISTS key field # determine if a hash field exists
  -HKEYS key # get all the fields in a hash
  -HLEN key # get all the fields in a hash
  -HSTRLEN key field # get the length of the value of a hash field
  -HVALS key # get all the values in a hash
- -## HyperLogLog
- -HyperLogLog uses randomization in order to provide an approximation of the number of unique elements in a set using just a constant, and small, amount of memory
- -PFADD key element [element ...] # add the specified elements to the specified HyperLogLog
  -PFCOUNT key [key ...] # return the approximated cardinality of the set(s) observed by the HyperLogLog at key's)
- -PFMERGE destkey sourcekey [sourcekey ...] # merge N HyperLogLogs into a single one
- -## Publication & Subscription
- -PSUBSCRIBE pattern [pattern ...] # listen for messages published to channels matching the given patterns
  -PUBSUB subcommand [argument [argument ...]] # inspect the state of the Pub/Sub subsystem
  -PUBLISH channel message # post a message to a channel
  -PUNSUBSCRIBE [pattern [pattern ...]] # stop listening for messages posted to channels matching the given patterns
  -SUBSCRIBE channel [channel ...] # listen for messages published to the given channels
  -UNSUBSCRIBE [channel [channel ...]] # stop listening for messages posted to the given channels
- -## Other Commands
- -KEYS pattern # find all keys matching the given pattern
