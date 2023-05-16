import { User, Grid } from "@nextui-org/react";

export default function CardUsers() {
  return (
    <>
      <div className=" mx-auto max-w-[1040px] mt-10 px-5 my-5 xl:mb-32">
        <h1 className=" xl:text-4xl mb-5">Users</h1>
        <Grid.Container gap={2}>
          <Grid>
            <User
              bordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              name="Ariana Wattson"
              color="primary"
            />
          </Grid>
          <Grid>
            <User
              bordered
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              name="Jane Fisher"
              color="secondary"
            />
          </Grid>
          <Grid>
            <User
              bordered
              src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
              name="Kristen Copper"
              color="warning"
            />
          </Grid>
        </Grid.Container>
        <p>
          Our creators on the project
          <span className="font-black px-1">Ariana Wattson</span>
          after months of work we have finally managed to publish this notebook
          thanks to<span className="font-black px-1"> Jane Fisher</span>
          and a talented designer
          <span className="font-black px-1"> Kristen Copper</span>
          have thanked you all for contributing to this project that took us
          time, but after hard work we have come to an endhave thanked you all
          for contributing to this project that took us time, but after hard
          work we have come to an endhave thanked you all for contributing to
          this project that took us time, but after hard work we have come to an
          endhave thanked you all for contributing to this project that took us
          time, but after hard work we have come to an endhave thanked you all
          for contributing to this project that took us time, but after hard
          work we have come to an endhave thanked you all for contributing to
          this project that took us time, but after hard work we have come to an
          end
        </p>
      </div>
    </>
  );
}
