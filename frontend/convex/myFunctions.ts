import { query} from "./_generated/server";

export const fetchAllDataFromSensor = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("data_from_sensor").filter((q) => q.eq(q.field("device_id"), "ab01")).collect();
    return data;
  },
});

export const fetchplantdata = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("plant_data").collect();
    console.log(data);
    return data;
  },
});
