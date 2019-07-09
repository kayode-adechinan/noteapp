# create an ‘example’ user
curl -X POST http://127.0.0.1:8000/api/v1/auth/register/ --data 'email=me@example.com&password=mysecret2874'

# login 
curl -X POST http://127.0.0.1:8000/api/v1/auth/login/ --data 'email=me@example.com&password=mysecret2874'

# me
curl -LX GET http://127.0.0.1:8000/api/v1/auth/users/me/

# me with credentials
curl -LX GET http://127.0.0.1:8000/api/v1/auth/users/me/ -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYwMDk2MDYzLCJqdGkiOiI1ZThmMDA2MDRkN2E0NmZhOThjYTk4ODA4NDkyZDNlOSIsInVzZXJfaWQiOjF9.icbe1yfDk5IzgQ2ZPKc8F6eXn_sQZY15vytnRpCFDO8'