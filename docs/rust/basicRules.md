# RUST基础语法

## 变量与可变性

```rust
// 1.声明变量使用`let`关键字
let x = 6; 
x = 7; // 2.ERROR! 默认情况下，声明的变量是不可变的（immutable）

let mut y = 6;
y = 7; // 3.CORRECT! 在声明变量前加上`mut`关键词，变量可变（mutable）
```

## 常量
```rust
// 1.声明常量使用`const`关键词，常量不可加`mut`关键词，永远不可变
// 2.命名规范：常量使用全大写字母，每个单词用下划线隔开；
const MAX_POINTS:u32 = 100_000；
```
::: tip
1. 常量可以在任何作用域中声明，包括全局作用域，程序运行期间在其声明作用域内一直有效。<br/>
2. 常量只可以绑定到**常量表达式**，无法绑定到**函数的调用结果**或只能在**运行时才能计算出来的值**。
:::

## Shadowing（隐藏）
```rust
let x = 1;
x = x + 1; // ERROR! 声明变量不可变

let y = 1;
let y = y + 1; // CORRECT! 可以使用相同的的名字声明新的变量，新的变量会shadow（隐藏）之前声明的变量
```
::: tip
使用shadow重新定义的变量，可以修改变量的数据类型；而mut定义的变量不可修改变量的数据类型。
:::
```rust
let x = '    '; // x数据类型为'&str'
let x = spaces.len(); // CORRECT! x数据类型为'usize'

let mut y = '    ';
y = spaces.len(); // ERROR! mut修饰的变量，数据类型锁定了，不可更改
```