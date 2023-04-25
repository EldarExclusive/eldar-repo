from datetime import  datetime
from django.db import models


class Post(models.Model):
    # pk =  PrimarykeyField()
    title =models.CharField("главный текст", max_length=255, null=True, blank=True)
    content =models.TextField("Контент", null=True, blank=True)
    postDate=models.DateTimeField("дата и время публикации",default=datetime.now)


    def __str__(self):
        return self.title

    class Meta:
        verbose_name="Посты:"
        verbose_name_plural="Посты"