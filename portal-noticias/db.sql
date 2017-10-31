create database portal_noticias;

use portal_noticias;

create table noticias (
  id_noticia int not null primary key auto_increment,
  titulo varchar(100),
  noticia text,
  data_criacao timestamp default current_timestamp
);

insert into noticias(titulo, noticia) values ('Título da notícia', 'Conteúdo da notícia');