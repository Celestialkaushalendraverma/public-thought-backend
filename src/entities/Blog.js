var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
let Blog = class Blog {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Blog.prototype, "id", void 0);
__decorate([
    Column("varchar") // Explicit column type
    ,
    __metadata("design:type", String)
], Blog.prototype, "title", void 0);
__decorate([
    Column("text") // Explicit column type
    ,
    __metadata("design:type", String)
], Blog.prototype, "content", void 0);
__decorate([
    Column("varchar") // Explicit column type
    ,
    __metadata("design:type", String)
], Blog.prototype, "name", void 0);
__decorate([
    Column("varchar") // Explicit column type
    ,
    __metadata("design:type", String)
], Blog.prototype, "email", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], Blog.prototype, "created_at", void 0);
Blog = __decorate([
    Entity("blogs")
], Blog);
export { Blog };
