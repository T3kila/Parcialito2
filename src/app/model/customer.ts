
export class Customer{

  nombreComercialCliente: string;
  razonCliente: string;
  //saludoper_cliente: string;
  typeCliente: string;
  idCliente: number;
//  tipoDocumento: string;
 // tipoContrato: string;
  nitComercialCliente: string;
  giroCliente: string;
  rivaCliente: string;
  oencargadoCliente: string;
  teldirectoCliente: string;
  celularCliente: string;
  correoCliente: string;
  direccionCliente: string;

}
/*
.nombre_comercial_cliente, a.razon_cliente, a.saludoper_cliente,
a.type_cliente, a.id, b.tipo_documento, b.tipo_contrato,
a.nit_comercial_cliente, a.giro_cliente,
a.riva_cliente, a.direccion_cliente
from clientes as a
left outer join contratos as b on b.cliente_id=a.id
where b.vigente = 1
*/
