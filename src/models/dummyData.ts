export const TIMESTAMP_INFO = {
    blockSequenceNumber: 123,
    blockTimestamp: 'dummy_blockTimestamp',
}

export const ADD_ON = {
    transactionId: 'dummy_transactionId',
    ledger: 'dummy_ledger',
    timestampInfo: TIMESTAMP_INFO,
}

export const PROOF = {
    hash: 'dummy_proofHash',
    index: 0,
}

export const VC = {
    encodedSignedCredential: 'dummy_vcEncodedSignedCredential',
    proof: PROOF,
}

export const CREDENTIALS = {
    alias: 'dummy_credentialAlias',
    verifiedCredential: VC,
}

export const CLAIM = {
    content: 'dummy_content',
    subjectDid: 'dummy_subjectDid',
}

export const ISSUES_CREDENTIALS = {
    batchId: 'dummy_batchId',
    claim: CLAIM,
    credentialHash: 'dummy_credentialHash',
    issuingDidAlias: 'dummy_issuingDidAlias',
    operationHash: 'dummy_operationHash',
    revoked: false,
    ...CREDENTIALS,
}

export const KEY = {
    didIdx: 123,
    keyDerivation: 123,
    keyId: 'dummy_keyId',
    keyIdx: 321,
    keyTypeValue: 101,
    privateKey: 'dummy_privateKey',
    publicKey: 'dummy_publicKey',
}

export const DID = {
    alias: 'dummy_didAlias',
    didIdx: 0,
    keyPairs: [KEY],
    operationHash: 'dummy_operationHash',
    uriCanonical: 'dummy_uriCanonical',
    uriLongForm: 'dummy_uriLongForm',
}

export const chat = {
    id: 'dummy_chatID',
    toDids: ['toDids1', 'toDids2', 'toDids3', 'toDids4', 'toDids5'],
    fromAlias: 'dummy_fromAlias',
    title: 'dummy_title',
    published: true,
}

export const COMPRESSED_ECKeyData = {
    curve: 'dummy_curved',
    data: 'dummy_data',
}

export const BLOCKTXS = {
    action: 'dummy_action',
    description: 'dummy_description',
    txId: 'dummy_txId',
    url: 'dummy_url',
}

export const WALLET = {
    _id: 'dummy_walletID',
    mnemonic: 'dummy_walletMnemonic',
    passphrase: 'dummy_walletPassphrase',
    dids: [DID],
    importedCredentials: [CREDENTIALS],
    issuedCredentials: [ISSUES_CREDENTIALS],
    blockchainTxLogEntry: [BLOCKTXS],
};

export const AUTH_STATE = {
    userToken: WALLET,
    isLoading: false,
}

export const AUTHTOKEN = {
    type: 'dummy_token',
    token: WALLET,
}

export const PUBLIC_KEY = {
    id: 'dummy_PUBLIC_KEY_ID',
    usage: 'dummy_PUBLIC_KEY_USAGE',
    addedOn: ADD_ON,
    compressedEcKeyData: COMPRESSED_ECKeyData,
}

export const DID_DOCUMENT = {
    publicKeys: [PUBLIC_KEY]
}

export const CONTACT = {
    did: 'dummy_did',
    didDoc: DID_DOCUMENT,
    id: 'dummy_id',
}

export const SESSION_STATUS = {
    succeeded: 'dummy_succeeded',
    end: 'dummy_end',
    error: 'dummy_error',
}