import { useGlobalContext } from "../Context/GlobalContext";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";


const ManageAccessEntitlementsPage = () => {
    const {open} = useGlobalContext()
  return (
    <div className={open ? "pl-[16.5rem] pt-[5rem] duration-1000" : "pl-[6rem] pt-[5rem] duration-1000"}>
      <CustomBreadcrumb middleRoute="Continuous Monitoring" endRoute="Manage Access Entitlements" endRoutePath="/manage-access-entitlements"/>
      <p className="mt-4">Manage Access Entitlements</p>
    </div>
  )
}

export default ManageAccessEntitlementsPage
