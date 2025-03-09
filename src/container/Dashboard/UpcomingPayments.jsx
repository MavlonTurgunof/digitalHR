import React from "react";
import { Table, Tag } from "antd";
import dayjs from "dayjs";

const UpcomingSalaryPayments = () => {
  const salaryData = [
    {
      key: "1",
      name: "John Doe",
      department: "Engineering",
      phone: "+1234567890",
      salary: 5000,
      paymentDate: "2025-03-11",
      status: "Unpaid",
    },
    {
      key: "2",
      name: "Alice Johnson",
      department: "Marketing",
      phone: "+9876543210",
      salary: 4200,
      paymentDate: "2025-03-09",
      status: "Unpaid",
    },
    {
      key: "3",
      name: "Michael Smith",
      department: "HR",
      phone: "+1122334455",
      salary: 3800,
      paymentDate: "2025-03-10",
      status: "Unpaid",
    },
  ];

  // Filter salaries where payment date is within the next 3 days
  const upcomingPayments = salaryData.filter((payment) => {
    const today = dayjs();
    const paymentDate = dayjs(payment.paymentDate);
    return (
      paymentDate.isAfter(today) &&
      paymentDate.diff(today, "day") <= 3 &&
      payment.status === "Unpaid"
    );
  });

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Salary Amount",
      dataIndex: "salary",
      key: "salary",
      render: (salary) => `$${salary.toLocaleString()}`,
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (paymentDate) => dayjs(paymentDate).format("MMM DD, YYYY"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Unpaid" ? "red" : "green"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="mt-6 shadow-lg">
      <Table
        columns={columns}
        dataSource={upcomingPayments}
        rowKey="key"
        locale={{ emptyText: "No upcoming salary payments." }}
        pagination={false}
      />
    </div>
  );
};

export default UpcomingSalaryPayments;
