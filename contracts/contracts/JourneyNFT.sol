// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract JourneyNFT is ERC721, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    using Address for address payable;
    using Strings for uint256;

    Counters.Counter private tokenCounter;

    mapping(uint256 => string) private _tokenURIs;

    enum SaleState {
        Inactive,
        PreSale,
        PublicSale
    }

    // ==================== EVENTS ====================
    event Mint(address indexed minter);

    event Withdraw(address indexed dest);

    event WithdrawToken(address indexed tokenAddress, address indexed dest);

    // ================================================

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    // ============ PUBLIC FUNCTIONS FOR MINTING ============
    function mint(
        address recipient,
        string memory tokenURI
    ) external payable nonReentrant {
        uint256 tokenId = nextTokenId();
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit Mint(recipient);
    }

    // ============ PUBLIC READ-ONLY FUNCTIONS ============
    function getLastTokenId() external view returns (uint256) {
        return tokenCounter.current();
    }

    // ============ SUPPORTING FUNCTIONS ============
    function nextTokenId() private returns (uint256) {
        tokenCounter.increment();
        return tokenCounter.current();
    }

    // ============ FUNCTION OVERRIDES ============
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return _tokenURIs[tokenId];
    }

    // ============ OWNER-ONLY ADMIN FUNCTIONS ============
    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal {
        _tokenURIs[tokenId] = tokenURI;
    }

    function withdraw(address payable _dest) external onlyOwner {
        uint256 _balance = address(this).balance;
        _dest.sendValue(_balance);

        emit Withdraw(_dest);
    }

    function withdrawToken(
        address _tokenAddress,
        address _dest
    ) external onlyOwner {
        uint256 _balance = IERC20(_tokenAddress).balanceOf(address(this));
        SafeERC20.safeTransfer(IERC20(_tokenAddress), _dest, _balance);

        emit WithdrawToken(_tokenAddress, _dest);
    }

    /**
     * @dev enable contract to receive ether
     */
    receive() external payable {}
}
