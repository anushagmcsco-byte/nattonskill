import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, role, message, interestType } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required fields' },
        { status: 400 }
      );
    }

    // In a real system, sync to Hubspot/CRM or databases. Here, we mock-submit and log.
    console.log(`[Lead Capture Sync] Type: ${interestType || 'General Enquiry'}`);
    console.log(`Name: ${name} | Email: ${email} | Phone: ${phone || 'N/A'}`);
    if (organization) console.log(`School/Org: ${organization} | Role: ${role || 'N/A'}`);
    if (message) console.log(`Message: ${message}`);

    // Generate a reference number
    const refPrefix = {
      school: 'SCH-PRT',
      junior: 'JUN-SKX',
      pro: 'PRO-SKX',
      career: 'CAR-ASS',
      consultation: 'CSL-LOG',
    }[interestType as string] || 'NTN-GEN';

    const referenceNumber = `${refPrefix}-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      message: 'Lead synchronized successfully to Natton SkillX CRM.',
      referenceNumber,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
