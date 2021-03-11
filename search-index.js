var searchIndex = JSON.parse('{\
"guard":{"doc":"","i":[[0,"data","guard","",null,null],[3,"Data","guard::data","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[11,"new","","",0,[[]]],[0,"errors","guard","",null,null],[4,"ServiceError","guard::errors","",null,null],[13,"InternalServerError","","",1,null],[13,"NotAnEmail","","",1,null],[13,"NotAUrl","","",1,null],[13,"WrongPassword","","",1,null],[13,"UsernameNotFound","","",1,null],[13,"AuthorizationRequired","","",1,null],[13,"ProfainityError","","when the value passed contains profainity",1,null],[13,"BlacklistError","","when the value passed contains blacklisted words see …",1,null],[13,"UsernameCaseMappedError","","when the value passed contains characters not present in …",1,null],[13,"PasswordTooShort","","",1,null],[13,"PasswordTooLong","","",1,null],[13,"UsernameTaken","","when the a username is already taken",1,null],[13,"TokenNameTaken","","when the a token name is already taken",1,null],[3,"ErrorToResponse","","",null,null],[12,"error","","",2,null],[5,"dup_error","","",null,[[["error",4],["serviceerror",4]],["serviceerror",4]]],[6,"ServiceResult","","",null,null],[0,"api","guard","",null,null],[0,"v1","guard::api","",null,null],[0,"auth","guard::api::v1","",null,null],[3,"Register","guard::api::v1::auth","",null,null],[12,"username","","",3,null],[12,"password","","",3,null],[12,"email","","",3,null],[3,"Login","","",null,null],[12,"username","","",4,null],[12,"password","","",4,null],[3,"Password","","",null,null],[12,"password","","",5,null],[3,"signup","","",null,null],[3,"signin","","",null,null],[3,"signout","","",null,null],[5,"is_authenticated","","Check if user is authenticated",null,[[["identity",3]],[["serviceerror",4],["result",4]]]],[3,"delete_account","","",null,null],[0,"mcaptcha","guard::api::v1","",null,null],[3,"Domain","guard::api::v1::mcaptcha","",null,null],[12,"name","","",6,null],[3,"add_domain","","",null,null],[3,"delete_domain","","",null,null],[3,"TokenName","","",null,null],[12,"name","","",7,null],[3,"TokenKeyPair","","",null,null],[12,"name","","",8,null],[12,"key","","",8,null],[5,"get_random","","",null,[[],["string",3]]],[5,"services","guard::api::v1","",null,[[["serviceconfig",3]]]],[0,"settings","guard","",null,null],[3,"Server","guard::settings","",null,null],[12,"allow_registration","","",9,null],[12,"port","","",9,null],[12,"domain","","",9,null],[12,"cookie_secret","","",9,null],[12,"ip","","",9,null],[3,"Captcha","","",null,null],[12,"salt","","",10,null],[11,"get_ip","","",9,[[],["string",3]]],[3,"DatabaseBuilder","","",null,null],[12,"port","","",11,null],[12,"hostname","","",11,null],[12,"username","","",11,null],[12,"password","","",11,null],[12,"name","","",11,null],[12,"url","","",11,null],[11,"extract_database_url","","",11,[[["url",3]]]],[3,"Database","","",null,null],[12,"url","","",12,null],[12,"pool","","",12,null],[3,"Settings","","",null,null],[12,"debug","","",13,null],[12,"database","","",13,null],[12,"server","","",13,null],[12,"pow","","",13,null],[11,"new","","",13,[[],[["result",4],["configerror",4]]]],[5,"set_from_database_url","","",null,[[["config",3],["databasebuilder",3]]]],[5,"set_database_url","","",null,[[["config",3]]]],[3,"Data","guard","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[3,"Settings","","",null,null],[12,"debug","","",13,null],[12,"database","","",13,null],[12,"server","","",13,null],[12,"pow","","",13,null],[3,"SETTINGS","","",null,null],[12,"__private_field","","",14,null],[5,"main","","",null,[[],["result",6]]],[5,"get_json_err","","",null,[[],["jsonconfig",3]]],[5,"get_identity_service","","",null,[[],[["identityservice",3],["cookieidentitypolicy",3]]]],[11,"from","guard::data","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","guard::errors","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","guard::api::v1::auth","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"vzip","","",16,[[]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"from","guard::api::v1::mcaptcha","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","guard::settings","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","guard","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"from","guard::errors","",1,[[["credserror",4]],["serviceerror",4]]],[11,"from","","",1,[[["validationerrors",3]],["serviceerror",4]]],[11,"from","","",1,[[["parseerror",4]],["serviceerror",4]]],[11,"from","","",1,[[["error",4]]]],[11,"clone","guard::data","",0,[[],["data",3]]],[11,"clone","guard::errors","",1,[[],["serviceerror",4]]],[11,"clone","guard::api::v1::auth","",3,[[],["register",3]]],[11,"clone","","",4,[[],["login",3]]],[11,"clone","guard::api::v1::mcaptcha","",6,[[],["domain",3]]],[11,"clone","","",7,[[],["tokenname",3]]],[11,"clone","","",8,[[],["tokenkeypair",3]]],[11,"clone","guard::settings","",9,[[],["server",3]]],[11,"clone","","",10,[[],["captcha",3]]],[11,"clone","","",11,[[],["databasebuilder",3]]],[11,"clone","","",12,[[],["database",3]]],[11,"clone","","",13,[[],["settings",3]]],[11,"eq","guard::errors","",1,[[["serviceerror",4]]]],[11,"deref","guard","",14,[[],["settings",3]]],[11,"fmt","guard::errors","",1,[[["formatter",3]],["result",6]]],[11,"fmt","guard::api::v1::auth","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","guard::api::v1::mcaptcha","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","guard::settings","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","guard::errors","",1,[[["formatter",3]],["result",6]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","guard::api::v1::auth","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","guard::api::v1::mcaptcha","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","guard::settings","",9,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"serialize","guard::errors","",2,[[],["result",4]]],[11,"serialize","guard::api::v1::auth","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","guard::api::v1::mcaptcha","",6,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"register","guard::api::v1::auth","",15,[[["appservice",3]]]],[11,"register","","",16,[[["appservice",3]]]],[11,"register","","",17,[[["appservice",3]]]],[11,"register","","",18,[[["appservice",3]]]],[11,"register","guard::api::v1::mcaptcha","",19,[[["appservice",3]]]],[11,"register","","",20,[[["appservice",3]]]],[11,"error_response","guard::errors","",1,[[],["httpresponse",3]]],[11,"status_code","","",1,[[],["statuscode",3]]],[11,"initialize","guard","",14,[[]]]],"p":[[3,"Data"],[4,"ServiceError"],[3,"ErrorToResponse"],[3,"Register"],[3,"Login"],[3,"Password"],[3,"Domain"],[3,"TokenName"],[3,"TokenKeyPair"],[3,"Server"],[3,"Captcha"],[3,"DatabaseBuilder"],[3,"Database"],[3,"Settings"],[3,"SETTINGS"],[3,"signup"],[3,"signin"],[3,"signout"],[3,"delete_account"],[3,"add_domain"],[3,"delete_domain"]]},\
"tests_migrate":{"doc":"","i":[[0,"data","tests_migrate","",null,null],[3,"Data","tests_migrate::data","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[11,"new","","",0,[[]]],[0,"settings","tests_migrate","",null,null],[3,"Server","tests_migrate::settings","",null,null],[12,"allow_registration","","",1,null],[12,"port","","",1,null],[12,"domain","","",1,null],[12,"cookie_secret","","",1,null],[12,"ip","","",1,null],[3,"Captcha","","",null,null],[12,"salt","","",2,null],[11,"get_ip","","",1,[[],["string",3]]],[3,"DatabaseBuilder","","",null,null],[12,"port","","",3,null],[12,"hostname","","",3,null],[12,"username","","",3,null],[12,"password","","",3,null],[12,"name","","",3,null],[12,"url","","",3,null],[11,"extract_database_url","","",3,[[["url",3]]]],[3,"Database","","",null,null],[12,"url","","",4,null],[12,"pool","","",4,null],[3,"Settings","","",null,null],[12,"debug","","",5,null],[12,"database","","",5,null],[12,"server","","",5,null],[12,"pow","","",5,null],[11,"new","","",5,[[],[["configerror",4],["result",4]]]],[5,"set_from_database_url","","",null,[[["config",3],["databasebuilder",3]]]],[5,"set_database_url","","",null,[[["config",3]]]],[3,"Data","tests_migrate","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[3,"Settings","","",null,null],[12,"debug","","",5,null],[12,"database","","",5,null],[12,"server","","",5,null],[12,"pow","","",5,null],[3,"SETTINGS","","",null,null],[12,"__private_field","","",6,null],[5,"main","","",null,[[]]],[11,"from","tests_migrate::data","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","tests_migrate::settings","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","tests_migrate","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"clone","tests_migrate::data","",0,[[],["data",3]]],[11,"clone","tests_migrate::settings","",1,[[],["server",3]]],[11,"clone","","",2,[[],["captcha",3]]],[11,"clone","","",3,[[],["databasebuilder",3]]],[11,"clone","","",4,[[],["database",3]]],[11,"clone","","",5,[[],["settings",3]]],[11,"deref","tests_migrate","",6,[[],["settings",3]]],[11,"fmt","tests_migrate::settings","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"initialize","tests_migrate","",6,[[]]],[11,"deserialize","tests_migrate::settings","",1,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]]],"p":[[3,"Data"],[3,"Server"],[3,"Captcha"],[3,"DatabaseBuilder"],[3,"Database"],[3,"Settings"],[3,"SETTINGS"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);