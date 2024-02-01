import React from 'react'
import { Menubar } from 'primereact/menubar'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const BasicDesign = () => {
	const items = [
		{
			label: 'Home',
			icon: 'pi pi-home'
		},
		{
			label: 'Products',
			icon: 'pi pi-shopping-cart'
		},
		{
			label: 'About',
			icon: 'pi pi-info-circle'
		}
	]

	const products = [
		{ id: 1, name: 'Product A', price: 50 },
		{ id: 2, name: 'Product B', price: 75 },
		{ id: 3, name: 'Product C', price: 100 }
	]

	return (
		<div>
			{/* Menubar */}
			<Menubar model={items} />

			{/* Data Table */}
			<DataTable value={products}>
				<Column field="id" header="ID"></Column>
				<Column field="name" header="Name"></Column>
				<Column field="price" header="Price"></Column>
			</DataTable>
		</div>
	)
}

export default BasicDesign
