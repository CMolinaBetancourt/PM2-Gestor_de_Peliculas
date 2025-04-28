const CarritoCompra = require('../index')

// constructor(): Inicializa el carrito como un array vacio.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
describe('La clase Carrito', () => {
  let carrito

  beforeEach(() => {
    carrito = new CarritoCompra()
  })

  it('Debe tener un constructor que inicializa el carrito como un array vacío', () => {
    expect(carrito.productos).toEqual([]);
    expect(carrito.productos.length).toBe(0);
  })

  it('Debe tener el método agregarProducto que agregue un nuevo producto', () => {
    expect(carrito.agregarProducto).toBeDefined()

    expect(typeof carrito.agregarProducto).toBe('function')

    carrito.agregarProducto({ name: "Producto A", price: 30 });
    expect(carrito.productos.length).toBe(1);
    carrito.agregarProducto({ name: "Producto B", price: 30 });
    carrito.agregarProducto({ name: "Producto C", price: 40 });
    expect(carrito.productos.length).toBe(3);
  })

  it('Debe tener el método calcularTotal que devuelva la suma de todos los precios de los productos', () => {
      expect(typeof carrito.calcularTotal).toBe('function')

      carrito.agregarProducto({ name: "Producto A", price: 30 });
      carrito.agregarProducto({ name: "Producto B", price: 30 });
      expect(carrito.calcularTotal()).toBe(60)
    })

  it('Debe tener el método aplicarDescuento que recibe un porcentaje especificado', () => {
    expect(typeof carrito.aplicarDescuento).toBe('function')
    carrito.agregarProducto({ name: "Producto A", price: 30 });
    carrito.agregarProducto({ name: "Producto B", price: 30 });
    expect(carrito.aplicarDescuento(10)).toBe(54)

    expect(carrito.aplicarDescuento(0)).toBe(carrito.calcularTotal())
  })
  })




