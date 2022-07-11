from django.conf import settings
from django.db import models

from utils.file import generate_photobook_file_name
from utils.models import BaseModel


class Gallery(BaseModel):
    image = models.ImageField(upload_to=generate_photobook_file_name)

    class Meta:
        verbose_name = "Gallery"
        verbose_name_plural = "Gallery"


class PhotoBook(BaseModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="user_photobook",
    )
    images = models.ManyToManyField(Gallery, related_name="photobook_images")

    class Meta:
        verbose_name = "PhotoBook"
        verbose_name_plural = "PhotoBooks"

    def __unicode__(self):
        return f"{self.user.username}"

    def __str__(self):
        return f"{self.user.username}"
