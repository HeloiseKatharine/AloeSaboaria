drop table clientes;
create table cliente(
nome varchar(30) not null,
cpf varchar(30) primary key not null,
email varchar(50) not null,
senha varchar(60) not null
);
drop table administrador;
create table administrador(
nome varchar(30) not null,
cpf varchar(30) primary key not null,
email varchar(50) not null,
senha varchar(60) not null
);
drop table pedido;
create table pedido(
id SERIAL primary key ,
endereco varchar(300) not null,
frete numeric(10,2),
valor_pedido numeric(10,2),
dataPedido date,
cpf_cliente varchar(30) not null,
constraint fk_cpf_cliente foreign key(cpf_cliente) references cliente(cpf)
); 

--drop table pedido_realizado; 
--create table pedido_realizado(
--id Serial primary key,
--cpf_cliente varchar(30) not null,
--id_pedido integer not null,
--dataPedido date,
--constraint fk_pedidos_realizados foreign key(id_pedido) references pedido(id),
--constraint fk_cpf_cliente foreign key(cpf_cliente) references cliente(cpf)
--);

drop table pedido_produto; 
create table pedido_produto(
id Serial primary key,
id_pedido int not null,
id_produto int not null,
quant_produtos int,
constraint fk_pedido foreign key(id_pedido) references pedido(id),
constraint fk_produto foreign key(id_produto) references produto(id)
);
create table produto(
id Serial primary key,
peso numeric(5,5),
categoria varchar(30),
valor numeric(5,2) not null,
nome varchar(50) not null,
descricao varchar(300),
quantidade numeric
);
create table transportadora(
id Serial primary key,
codigo_rastreio varchar(50),
nome varchar(70),
url varchar(50)
);
drop table pedido_enviado;
create table pedido_enviado(
id Serial primary key,
id_pedido int not null,
id_transportadora int not null,
data_envio date,
constraint fk_pedido foreign key(id_pedido) references pedido(id),
constraint fk_transportadora foreign key(id_transportadora) references transportadora(id)
);

CREATE OR REPLACE FUNCTION diminui_quantidade_produtos()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
	update produto set quantidade = quantidade - new.quant_produtos	
		where id = new.id_produto;
	return new;
end;
$function$
;
create trigger pedido_produto_ai after insert on pedido_produto
for each row 
execute procedure  diminui_quantidade_produtos();
insert into pedido(endereco) values('areal');

select * from pedido;
select * from produto;
insert into pedido_produto(id_pedido,id_produto,quant_produtos) values(1,2,5);
