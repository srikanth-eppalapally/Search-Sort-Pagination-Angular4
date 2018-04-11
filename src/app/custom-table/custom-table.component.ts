import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-table-component',
    templateUrl: './custom-table.component.html',
    styleUrls: ['./custom-table.component.scss']
})
export class AppCustomTableComponent {
    @Input() customTableOptions;
    currentPage: 1;
    count: number;
    pageStart = 0;
    pageEnd = 9;
    pages: number;
    pagesArray = [];
    pageSize = 10;
    pageItems = [];
    constructor() {
    }
    refreshTable() {
        this.pageItems = this.customTableOptions.filteredData.slice(this.pageStart, this.pageEnd + 1);
    }
    onTableSearch() {
        if (this.customTableOptions.filterString) {
            this.customTableOptions.filteredData = this.customTableOptions.data.filter((row) => {
                let searchString = '';
                for (const key in row) {
                    if (key !== 'id') {
                        searchString += row[key];
                    }
                }
                return searchString.toLowerCase().indexOf(this.customTableOptions.filterString.toLowerCase()) > -1;
            });
        } else {
            this.customTableOptions.filteredData = this.customTableOptions.data;
        }
        this.onChangePagination(1);
    }

    onSelectRow(e, row) {
        if (row.checked) {
            this.customTableOptions.selectedRows.push(row);
        } else {
            this.customTableOptions.selectedRows = this.customTableOptions.selectedRows.filter((obj) => {
                return row.id !== obj.id;
            });
        }
    }

    sort(key) {
        this.customTableOptions.sortWith = key;
        this.customTableOptions.sortDirection = !this.customTableOptions.sortDirection;
    }

    onChangePagination(pageNumber) {
        this.currentPage = pageNumber;
        const buttonsToBeDisplayed = 5;
        this.pages = Math.ceil(this.customTableOptions.filteredData.length / this.pageSize);
        this.pagesArray = [];
        let lastPage: number;
        let firstPage: number;
        if (this.pages <= buttonsToBeDisplayed) {
            firstPage = 1;
            lastPage = this.pages;
        } else {
            if (pageNumber <= Math.ceil(buttonsToBeDisplayed / 2)) {
                firstPage = 1;
                lastPage = buttonsToBeDisplayed;
            } else if (pageNumber + Math.ceil(buttonsToBeDisplayed / 2) > this.pages) {
                firstPage = this.pages - buttonsToBeDisplayed + 1;
                lastPage = this.pages;
            } else {
                firstPage = pageNumber - Math.ceil(buttonsToBeDisplayed / 2) + 1;
                lastPage = firstPage + buttonsToBeDisplayed - 1;
            }
        }
        this.pageStart = (pageNumber - 1) * this.pageSize;
        this.pageEnd = Math.min(this.pageStart + this.pageSize - 1, this.customTableOptions.filteredData.length);
        for (let i = firstPage; i <= lastPage; i++) {
            this.pagesArray.push(i);
        }
        this.refreshTable();
        const firstInd = (pageNumber - 1) * 10;
        let visibleItems = 0;
        visibleItems = this.pageItems.length;
        this.count = firstInd + visibleItems;
    }

}
