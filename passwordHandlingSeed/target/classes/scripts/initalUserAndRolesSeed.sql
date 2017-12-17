
INSERT INTO SEED_USER (USER_NAME, PASSWORD_HASH) VALUES ('Peter', 'test')
INSERT INTO SEED_USER (USER_NAME, PASSWORD_HASH) VALUES ('Anne', 'test')
INSERT INTO SEED_USER (USER_NAME, PASSWORD_HASH) VALUES ('user_admin', 'test')

INSERT INTO USER_ROLE (ROLE_NAME) VALUES ('Admin')
INSERT INTO USER_ROLE (ROLE_NAME) VALUES ('User')


INSERT INTO SEED_USER_USER_ROLE (ROLES_ROLE_NAME, USERS_USER_NAME) VALUES ('Admin', 'admin')
INSERT INTO SEED_USER_USER_ROLE (ROLES_ROLE_NAME, USERS_USER_NAME) VALUES ('User', 'user')
INSERT INTO SEED_USER_USER_ROLE (ROLES_ROLE_NAME, USERS_USER_NAME) VALUES ('Admin', 'user_admin')
INSERT INTO SEED_USER_USER_ROLE (ROLES_ROLE_NAME, USERS_USER_NAME) VALUES ('User', 'user_admin')