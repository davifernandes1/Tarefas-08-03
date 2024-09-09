import turtle

t = turtle.Turtle()
t.speed(5)

# Função para desenhar o retângulo (caixa do presente)
def draw_retangulo(width, height, color):
    t.begin_fill()
    t.fillcolor(color)
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Função para desenhar uma listra
def draw_listra(width, height, color):
    t.begin_fill()
    t.fillcolor(color)
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Desenhar o corpo do presente
t.penup()
t.goto(-100, -100)
t.pendown()
draw_retangulo(200, 200, "red")

# Desenhar a listra horizontal no meio da caixa
t.penup()
t.goto(-100, -10)  # Ajusta a posição da listra horizontal
t.pendown()
draw_listra(200, 25, "white")

# Desenhar a listra vertical no meio da caixa
t.penup()
t.goto(10, 100)  # Ajusta a posição da listra vertical
t.setheading(180)
t.pendown()
draw_listra(25, 200, "white")

# Desenhar o retângulo adicional no topo
t.penup()
t.goto(120, 130)  # Ajusta a posição do retângulo adicional
t.pendown()
draw_retangulo(240, 30, "white")

t.penup()
t.goto(50, 150)  # Ajusta a posição do retângulo adicional
t.pendown()
draw_retangulo(100, 20, "white")


# Finalizar o desenho
t.hideturtle()
turtle.done()
