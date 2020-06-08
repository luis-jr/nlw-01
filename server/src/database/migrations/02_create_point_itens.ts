import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable("point_itens", (table) => {
        table.increments("id").primary();
        table.integer("point_id").unsigned().notNullable();
        table.integer("item_id").unsigned().notNullable();
    
        table.foreign("point_id").references("id").inTable("points");
        table.foreign("item_id").references("id").inTable("itens");
      })
    };

export async function down(knex: Knex) {
    // VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable('points_itens');

}