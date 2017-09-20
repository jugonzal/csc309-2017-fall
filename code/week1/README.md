# Try these in your command line prompt:

```
curl https://reqres.in/api/users

  {"page":1,"per_page":3,"total":12,"total_pages":4,"data":[{"id":1,"first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}]}

curl -X POST --header 'Content-Type: application/json' -d '{"name": "morpheus","job":"leader"}' https://reqres.in/api/users

  {"name":"morpheus","job":"leader","id":"116","createdAt":"2017-09-13T20:44:06.607Z"}

curl -X PUT --header 'Content-Type: application/json' -d '{"id": 0, "name": "juan","job":"teacher"}' https://reqres.in/api/users

  {"id":0,"name":"juan","job":"teacher","updatedAt":"2017-09-14T02:30:00.905Z"}jugonzal @ code $ 


```