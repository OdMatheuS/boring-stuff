import os
import random
import time
from pydub import AudioSegment
from pydub.playback import play

#a pasta onde ta suas musicas/memes 
pasta_sons = '~/Music/sons/'

t = int(input("Minutos de foco: ")) * 60 #escolhe o tempo de foco

# só pra limpar o terminal
def clear():
    os.system("clear")

# contar o tempo e exibir a barra de progresso
for remaining in range(t, 0, -1):
    bar_length = 30  # define o tamanho da barra
    filled_length = bar_length - remaining * bar_length // t
    bar = '█' * filled_length + '-' * (bar_length - filled_length)

    #tempo que falta/contagem regressiva
    print(f'\r|{bar}| {remaining}s restantes', end='')
    time.sleep(1)


# tocar um som aleatório
sons = [f for f in os.listdir(pasta_sons) if f.endswith('.mp3')]
if sons:
    play(AudioSegment.from_file(os.path.join(pasta_sons, random.choice(sons))))

clear()
print("\n Acabou!! Faça uma pausa!")
