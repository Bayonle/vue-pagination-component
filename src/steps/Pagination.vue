<template>
    <div class="page-container">
        <div class="pagination-container">
            <div>
                <div>
                    Showing 1 - 10 of 250
                </div>
            </div>
            <div class="page-controls">
                <button>
                    <span>&lt;</span>
                </button>
                <div>
                    <span>Page</span> <input  class="page-number" min="1" type="number" style="width:30px" value="1"> <span class="mr-4"> of 10</span>
                </div>
                <button>
                    <span>&gt;</span>
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .page-container{
        height: 80vh;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 3rem 10rem;
        margin: 0 auto;
    }
    .pagination-container{
        display: flex;
        justify-content: space-between
    }

    .page-controls {
        display: flex;
    }
    .page-controls button{
        padding: 8px;
        outline: none;
        line-height: 8px;
        border-radius: 2px;
        margin: 0 1rem;
        cursor: pointer;
        background-color: purple;
        color: white;
        font-weight: bold
    }

    .page-number {
        text-align: center;
        padding: 8px;
        line-height: 8px
    }
</style>