"use server";

import dbConnect from "@/lib/dbConnect";

export  const postSingleData = async (postedData) => {
  try {
   
    const result = await dbConnect("test-Product").insertOne(postedData);
    revalidatePath("/products");
    return Response.json(result);
  } catch (error) {
    console.log(error);
    return [];
  }
};


