from pydantic import BaseModel


class ListingBase(BaseModel):
    title: str
    category: str
    description: str
    price: int
    location: str
    phone: str
    email: str


class ListingCreate(ListingBase):
    pass


class ListingUpdate(ListingBase):
    pass


class ListingResponse(ListingBase):
    id: int

    class Config:
        from_attributes = True